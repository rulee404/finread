import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { createClient } from "@/lib/supabase/server";

export async function POST() {
  const stripe = getStripe();
  if (!stripe) {
    return NextResponse.json(
      { error: "Stripe is not configured" },
      { status: 503 },
    );
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const priceId = process.env.STRIPE_PRO_PRICE_ID;
  if (!priceId) {
    return NextResponse.json(
      { error: "Pro subscription price not configured" },
      { status: 503 },
    );
  }

  const origin =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://finread.vercel.app";

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card", "wechat_pay", "alipay"],
    payment_method_options: {
      wechat_pay: { client: "web" },
    },
    line_items: [{ price: priceId, quantity: 1 }],
    metadata: {
      user_id: user.id,
      user_email: user.email ?? "",
      type: "pro_subscription",
    },
    customer_email: user.email ?? undefined,
    success_url: `${origin}/checkout/success?type=pro`,
    cancel_url: `${origin}/pro`,
  });

  return NextResponse.json({ url: session.url });
}
