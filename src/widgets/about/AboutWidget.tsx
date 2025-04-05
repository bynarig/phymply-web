"use client"

import { useState } from "react";
import HistoryWidget from "@/widgets/about/HistoryWidget";
import SymbolicsWidget from "@/widgets/about/SymbolicsWidget";

// import Period2Content from "./Period2Content";
// import ModernContent from "./ModernContent";

type TabName = "history" | "symbolics" | "modern";

type Tab = {
  name: TabName;
  title: string;
};

export default function AboutWidget() {
  const [activeTab, setActiveTab] = useState<TabName>("history");

  const tabs: Tab[] = [
    {
      name: "history",
      title: "Історія"
    },
    {
      name: "symbolics",
      title: "Символіка"
    },
    {
      name: "modern",
      title: "Документи та "
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "history": return <HistoryWidget />;
      case "symbolics": return <SymbolicsWidget />;
      // case "modern": return <ModernContent />;
      default: return null;
    }
  };

  return (
    <>
      <div className="px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Про Ліцей</h2>

        <div className="tabs tabs-boxed">
          {tabs.map((tab) => (
            <a
              key={tab.name}
              className={`tab ${activeTab === tab.name ? 'tab-active' : ''}`}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.title}
            </a>
          ))}
        </div>

        <div className="mt-6">
          {renderTabContent()}
        </div>
      </div>
    </>
  );
}