import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCompany, getAllTickers } from "@/lib/companies";
import CompanyHeader from "@/components/CompanyHeader";
import CompanyTabs from "./CompanyTabs";

interface Props {
  params: Promise<{ ticker: string }>;
}

export async function generateStaticParams() {
  return getAllTickers().map((ticker) => ({ ticker }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ticker } = await params;
  const company = getCompany(ticker);
  if (!company) return { title: "Not Found" };
  return {
    title: `${company.ticker} ${company.name} · Q4/FY2025 一手财报 | FinRead`,
    description: company.tagline,
  };
}

export default async function CompanyPage({ params }: Props) {
  const { ticker } = await params;
  const company = getCompany(ticker);
  if (!company) notFound();

  return (
    <div className="mx-auto max-w-[1080px] px-5">
      <CompanyHeader company={company} />
      <CompanyTabs company={company} />
    </div>
  );
}
