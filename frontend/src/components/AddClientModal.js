import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

const HookFormWrapper = ({ children, control, name }) => {
  const child = React.Children.only(children);
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => React.cloneElement(child, field)}
    />
  );
};

const AddClientModal = ({ isOpen, onClose, onSubmit }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      clientType: "Individual",
      email: "",
      status: "Active",
    },
    mode: "onChange",
  });

  const submitForm = (data) => {
    onSubmit(data);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Add New Client</h2>

        <form onSubmit={handleSubmit(submitForm)} className="space-y-4">
          {/* Client Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Client Name
            </label>
            <HookFormWrapper control={control} name="name">
              <input
                type="text"
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </HookFormWrapper>
          </div>

          {/* Client Type */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Client Type
            </label>
            <HookFormWrapper control={control} name="clientType">
              <select
                name="clientType"
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="Individual">Individual</option>
                <option value="Company">Company</option>
              </select>
            </HookFormWrapper>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email ID</label>
            <HookFormWrapper control={control} name="email">
              <input
                type="email"
                name="email"
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </HookFormWrapper>
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium mb-1">Status</label>
            <HookFormWrapper control={control} name="status">
              <select
                name="status"
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </HookFormWrapper>
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-md text-sm hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded-md text-sm hover:bg-gray-800"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClientModal;
