import React, { useState } from "react";
import { Plus } from "lucide-react";
import AddClientModal from "./AddClientModal";
import { useUserContext } from "../context/UserContext";

const AddClientButton = () => {
  const { isModalOpen, setIsModalOpen, handleCreateClient } = useUserContext();

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center space-x-2 px-4 py-2 bg-black text-white text-sm font-medium rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
      >
        <Plus className="w-4 h-4" />
        <span>Add Client</span>
      </button>

      {isModalOpen && (
        <AddClientModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleCreateClient}
        />
      )}
    </>
  );
};

export default AddClientButton;
