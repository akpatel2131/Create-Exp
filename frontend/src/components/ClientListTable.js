import React, { useState } from "react";
import ClientTable from "./ClientTable";
import { USER_DATA } from "../data";

export default function ClientListTable () {
  const [clients] = useState(USER_DATA);

    return (
        <div className="w-full max-w-7xl mx-auto p-6 bg-white">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-semibold text-gray-900">Clients</h1>
          </div>
        </div>
        {/* Table */}
        <ClientTable clients={clients} />
  
        {/* Info */}
        <div className="mt-4 text-sm text-gray-500">
          Showing 0 clients
        </div>
      </div>
    )
}