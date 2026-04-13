import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { createServerClient } from "@supabase/ssr";

function getServiceClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) return null;
  return createServerClient(url, serviceKey, {
    cookies: {
      getAll: () => [],
      setAll: () => {},
    },
  });
}

export async function POST(request: NextRequest) {
  const stripe = getStripe();
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!stripe || !webhookSecret) {
    return NextResponse.json({ error: "Not configured" }, { status: 503 });
  }

  const body = await request.text();
  const sig = request.headers.get("stripe-signature");
  if (!sig) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const supabase = getServiceClient();
  if (!supabase) {
    return NextResponse.json(
      { error: "Supabase not configured" },
      { status: 503 },
    );
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const metadata = session.metadata ?? {};

    if (metadata.type === "article" && metadata.doc_id && metadata.user_id) {
      await supabase.from("purchases").upsert(
        {
          user_id: metadata.user_id,
          doc_id: metadata.doc_id,
          amount: (session.amount_total ?? 0) / 100,
          stripe_session_id: session.id,
        },
        { onConflict: "user_id,doc_id" },
      );
    }

    if (metadata.type === "pro_subscription" && metadata.user_id) {
      const subId =
        typeof session.subscription === "string"
          ? session.subscription
          : session.subscription?.toString() ?? null;

      await supabase.from("subscriptions").upsert(
        {
          user_id: metadata.user_id,
          stripe_subscription_id: subId,
          status: "active",
          current_period_end: new Date(
            Date.now() + 30 * 24 * 60 * 60 * 1000,
          ).toISOString(),
        },
        { onConflict: "user_id" },
      );
    }
  }

  if (event.type === "customer.subscription.deleted") {
    const sub = event.data.object;
    const subId = sub.id;
    await supabase
      .from("subscriptions")
      .update({ status: "cancelled" })
      .eq("stripe_subscription_id", subId);
  }

  return NextResponse.json({ received: true });
}
