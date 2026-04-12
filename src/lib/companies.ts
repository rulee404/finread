import type { CompanyData } from "./types";

import hoodData from "@/data/companies/hood.json";
import coinData from "@/data/companies/coin.json";
import crclData from "@/data/companies/crcl.json";

const companies: Record<string, CompanyData> = {
  hood: hoodData as CompanyData,
  coin: coinData as CompanyData,
  crcl: crclData as CompanyData,
};

export function getCompany(ticker: string): CompanyData | undefined {
  return companies[ticker.toLowerCase()];
}

export function getAllCompanies(): CompanyData[] {
  return Object.values(companies);
}

export function getAllTickers(): string[] {
  return Object.keys(companies);
}
