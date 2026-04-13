import type { CompanyData } from "./types";
import type { ThemeId } from "./themes";

import hoodData from "@/data/companies/hood.json";
import coinData from "@/data/companies/coin.json";
import crclData from "@/data/companies/crcl.json";
import nvdaData from "@/data/companies/nvda.json";
import rklbData from "@/data/companies/rklb.json";

const companies: Record<string, CompanyData> = {
  hood: hoodData as CompanyData,
  coin: coinData as CompanyData,
  crcl: crclData as CompanyData,
  nvda: nvdaData as CompanyData,
  rklb: rklbData as CompanyData,
};

export function getCompany(ticker: string): CompanyData | undefined {
  return companies[ticker.toLowerCase()];
}

export function getAllCompanies(): CompanyData[] {
  return Object.values(companies);
}

export function getCompaniesByTheme(theme: ThemeId): CompanyData[] {
  return Object.values(companies).filter((c) => c.theme === theme);
}

export function getAllTickers(): string[] {
  return Object.keys(companies);
}
