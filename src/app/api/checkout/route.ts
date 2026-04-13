import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
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

  const body = await request.json();
  const { docId, title, price, returnUrl } = body as {
    docId: string;
    title: string;
    price: number;
    returnUrl: string;
  };

  if (!docId || !price || !returnUrl) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card", "wechat_pay", "alipay"],
    payment_method_options: {
      wechat_pay: { client: "web" },
    },
    line_items: [
      {
        price_data: {
          currency: "cny",
          product_data: {
            name: title,
            description: `FinRead 全文中英对照 · ${docId}`,
          },
          unit_amount: Math.round(price * 100),
        },
        quantity: 1,
      },
    ],
    metadata: {
      user_id: user.id,
      user_email: user.email ?? "",
      doc_id: docId,
      type: "article",
    },
    customer_email: user.email ?? undefined,
    success_url: `${returnUrl}?unlocked=1`,
    cancel_url: returnUrl,
  });

  return NextResponse.json({ url: session.url });
}
