import React from "react";
import ClientTableRow from "./ClientTableRow";
import { useUserContext } from "../context/UserContext";

const ClientTable = ({ activeTab }) => {
  const { clientData, clientDataLoading } = useUserContext();

  if (clientDataLoading) {
    return <div>Loading...</div>;
  }

  const data =
    activeTab === "All"
      ? clientData
      : activeTab === "Individual"
      ? clientData.filter((item) => item.clientType === "Individual")
      : clientData.filter((item) => item.clientType === "Company");

  return (
    <div className="border border-gray-200 rounded-lg overflow-scroll">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Client ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Client Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Client Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              created At
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              updated At
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((client) => (
            <ClientTableRow key={client.id} client={client} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientTable;
