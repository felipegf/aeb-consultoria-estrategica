"use client";

import { useState, ReactNode } from "react";

export default function SegmentTabs({
  tabs,
}: {
  tabs: { label: string; content: ReactNode }[];
}) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3 mb-10">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`px-6 py-3 rounded-lg text-sm font-semibold transition-colors ${
              active === i
                ? "bg-navy text-white"
                : "border-2 border-navy text-navy hover:bg-navy/5"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs[active].content}</div>
    </div>
  );
}
