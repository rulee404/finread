"use client";

import type { CompanyData } from "@/lib/types";
import Tabs from "@/components/Tabs";
import OverviewPanel from "./panels/OverviewPanel";
import EarningsPanel from "./panels/EarningsPanel";
import RelatedPanel from "./panels/RelatedPanel";
import DiscussionPanel from "./panels/DiscussionPanel";

export default function CompanyTabs({ company }: { company: CompanyData }) {
  return (
    <Tabs
      tabs={[
        {
          key: "overview",
          label: "概览",
          content: <OverviewPanel company={company} />,
        },
        {
          key: "earnings",
          label: "财报",
          content: <EarningsPanel company={company} />,
        },
        {
          key: "related",
          label: "相关",
          content: <RelatedPanel company={company} />,
        },
        {
          key: "discussion",
          label: "讨论",
          content: <DiscussionPanel company={company} />,
        },
      ]}
    />
  );
}
