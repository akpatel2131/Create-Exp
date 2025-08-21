import React from "react";

const ClientTableRow = ({ client }) => {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-medium">
        {client.id}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {client.name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {client.type}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {client.email}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`inline-flex items-center w-2 h-2 rounded-full ${
            client.status === "active" ? "bg-green-400" : "bg-gray-400"
          }`}
        ></span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {client.updatedBy}
      </td>
    </tr>
  );
};

export default ClientTableRow;
