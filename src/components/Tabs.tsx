"use client";

import { useState } from "react";

interface Tab {
  key: string;
  label: string;
  content: React.ReactNode;
}

export default function Tabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(tabs[0]?.key ?? "");

  return (
    <>
      <div className="flex flex-wrap gap-0.5 border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`mb-[-1px] whitespace-nowrap border-b-2 px-3.5 py-2.5 text-xs font-medium transition-colors ${
              active === tab.key
                ? "border-gold text-gold"
                : "border-transparent text-muted hover:text-text"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="pt-5">
        {tabs.map((tab) =>
          tab.key === active ? (
            <div key={tab.key}>{tab.content}</div>
          ) : null,
        )}
      </div>
    </>
  );
}
