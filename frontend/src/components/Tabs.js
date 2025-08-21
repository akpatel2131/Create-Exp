import React from "react";

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = ["All", "Individual", "Company"];

  return (
    <div className="flex space-x-10 border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`pb-2 text-sm font-medium ${
            activeTab === tab
              ? "text-black border-b-2 border-black"
              : "text-gray-500 hover:text-black"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
