import React, { useState } from "react";
import ClientTable from "./ClientTable";
import SortPanel from "./SortPanel";
import { Filter } from "lucide-react";
import AddClientButton from "./AddClientButton";
import Tabs from "./Tabs";

export default function ClientDashboard() {
  const [showSortPanel, setShowSortPanel] = useState(false);
  const [sortCriteria, setSortCriteria] = useState([]);
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-white">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Clients</h1>
      <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between mb-6 flex-wrap gap-4">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex items-center space-x-4 align-self-end">
          <div className="relative">
            <button
              onClick={() => setShowSortPanel(!showSortPanel)}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              <Filter className="w-4 h-4" />
              {sortCriteria.length > 0 && (
                <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5 ml-1">
                  {sortCriteria.length}
                </span>
              )}
            </button>

            {showSortPanel && (
              <SortPanel
                selectedSort={sortCriteria}
                onChange={setSortCriteria}
                onClose={() => setShowSortPanel(false)}
              />
            )}
          </div>

          <AddClientButton />
        </div>
      </div>
      <ClientTable activeTab={activeTab}/>
    </div>
  );
}
