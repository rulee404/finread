"use client";

import type { CompanyData } from "@/lib/types";
import Tabs from "@/components/Tabs";
import OverviewPanel from "./panels/OverviewPanel";
import DocsPanel from "./panels/DocsPanel";
import TranscriptPanel from "./panels/TranscriptPanel";
import WeeklyPanel from "./panels/WeeklyPanel";

export default function CompanyTabs({ company }: { company: CompanyData }) {
  return (
    <Tabs
      tabs={[
        {
          key: "overview",
          label: "概览与摘要",
          content: <OverviewPanel company={company} />,
        },
        {
          key: "docs",
          label: "原始文档",
          content: <DocsPanel company={company} />,
        },
        {
          key: "transcript",
          label: "电话会实录",
          content: <TranscriptPanel company={company} />,
        },
        {
          key: "weekly",
          label: "周报引用",
          content: <WeeklyPanel company={company} />,
        },
      ]}
    />
  );
}
