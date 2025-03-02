"use client"
import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Tab 2");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

//   Sort By
// Popularity
// Price -- Low to High
// Price -- High to Low
// Newest First
// Discount
  return (
    <div className="flex items-center gap-4 mt-3">
      {/* "Sort by:" label */}
      <span className="text-gray-600">Sort by:</span>

      {/* Tabs */}
      <div role="tablist" className="tabs tabs-border flex-1 max-w-2xl">
        <a
          role="tab"
          className={`tab ${activeTab === "Tab 1" ? "tab-active border-b-2 border-blue-500" : ""}`}
          onClick={() => handleTabClick("Tab 1")}
        >
          Popularity
        </a>
        <a
          role="tab"
          className={`tab ${activeTab === "Tab 2" ? "tab-active border-b-2 border-blue-500" : ""}`}
          onClick={() => handleTabClick("Tab 2")}
        >
          Price -- Low to High
        </a>
        <a
          role="tab"
          className={`tab ${activeTab === "Tab 3" ? "tab-active border-b-2 border-blue-500" : ""}`}
          onClick={() => handleTabClick("Tab 3")}
        >
          Price -- High to Low
        </a>
        <a
          role="tab"
          className={`tab ${activeTab === "Tab 4" ? "tab-active border-b-2 border-blue-500" : ""}`}
          onClick={() => handleTabClick("Tab 4")}
        >
          Newest First
        </a>
        <a
          role="tab"
          className={`tab ${activeTab === "Tab 5" ? "tab-active border-b-2 border-blue-500" : ""}`}
          onClick={() => handleTabClick("Tab 5")}
        >
          Discount
        </a>
      </div>
    </div>
  );
};

export default Tabs;