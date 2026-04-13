import { createClient } from "@/lib/supabase/client";

export async function checkPurchase(docId: string): Promise<boolean> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return false;

  const { data } = await supabase
    .from("purchases")
    .select("id")
    .eq("user_id", user.id)
    .eq("doc_id", docId)
    .maybeSingle();

  return !!data;
}

export async function checkProSubscription(): Promise<boolean> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return false;

  const { data } = await supabase
    .from("subscriptions")
    .select("status, current_period_end")
    .eq("user_id", user.id)
    .eq("status", "active")
    .maybeSingle();

  if (!data) return false;
  return new Date(data.current_period_end) > new Date();
}

export async function checkAccess(docId: string): Promise<{
  hasAccess: boolean;
  isPro: boolean;
  isLoggedIn: boolean;
}> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { hasAccess: false, isPro: false, isLoggedIn: false };

  const [purchaseResult, subResult] = await Promise.all([
    supabase
      .from("purchases")
      .select("id")
      .eq("user_id", user.id)
      .eq("doc_id", docId)
      .maybeSingle(),
    supabase
      .from("subscriptions")
      .select("status, current_period_end")
      .eq("user_id", user.id)
      .eq("status", "active")
      .maybeSingle(),
  ]);

  const purchased = !!purchaseResult.data;
  const isPro =
    !!subResult.data &&
    new Date(subResult.data.current_period_end) > new Date();

  return {
    hasAccess: purchased || isPro,
    isPro,
    isLoggedIn: true,
  };
}
