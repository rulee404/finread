import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY;

export function getStripe(): Stripe | null {
  if (!key) return null;
  return new Stripe(key, { apiVersion: "2026-03-25.dahlia" });
}

export function isStripeConfigured(): boolean {
  return !!key && !!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
}
