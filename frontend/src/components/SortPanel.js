import React, { useState } from "react";
import { X, ChevronUp, ChevronDown } from "lucide-react";
import { SORT_OPTIONS } from "../constant";

const SortPanel = ({ selectedSort, onChange, onClose }) => {
  const [localSort, setLocalSort] = useState(selectedSort || []);

  const toggleDirection = (index) => {
    setLocalSort((prev) =>
      prev.map((s, i) =>
        i === index
          ? { ...s, direction: s.direction === "asc" ? "desc" : "asc" }
          : s
      )
    );
  };

  const addSortOption = (field) => {
    if (localSort.some((s) => s.field === field)) return;
    setLocalSort([...localSort, { field, direction: "asc" }]);
  };

  const removeSortOption = (index) => {
    setLocalSort(localSort.filter((_, i) => i !== index));
  };

  const applySort = () => {
    onChange(localSort);
    onClose();
  };

  return (
    <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium text-gray-900">Sort By</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Current selected sort */}
        <div className="space-y-2 mb-4">
          {localSort.map((criterion, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 p-2 bg-gray-50 rounded-md border"
            >
              <span className="text-sm font-medium">
                {SORT_OPTIONS.find((o) => o.value === criterion.field)?.label}
              </span>
              <button
                onClick={() => toggleDirection(index)}
                className="flex items-center space-x-1 px-2 py-1 text-xs bg-white border rounded hover:bg-gray-50"
              >
                {criterion.direction === "asc" ? (
                  <>
                    <ChevronUp className="w-3 h-3" />
                    <span>A-Z</span>
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-3 h-3" />
                    <span>Z-A</span>
                  </>
                )}
              </button>
              <button
                onClick={() => removeSortOption(index)}
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Add new sort option */}
        <div className="space-y-2">
          {SORT_OPTIONS
            .filter((o) => !localSort.some((s) => s.field === o.value))
            .map((option) => (
              <button
                key={option.value}
                onClick={() => addSortOption(option.value)}
                className="w-full flex items-center space-x-2 p-2 text-left hover:bg-gray-50 rounded-md"
              >
                <span>{option.icon}</span>
                <span className="text-sm">{option.label}</span>
              </button>
            ))}
        </div>
        <div className="flex items-center justify-between mt-4 pt-4 border-t">
          <button
            onClick={() => setLocalSort([])}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Clear all
          </button>
          <button
            onClick={applySort}
            className="px-4 py-2 bg-black text-white text-sm rounded-md hover:bg-gray-800"
          >
            Apply Sort
          </button>
        </div>
      </div>
    </div>
  );
};

export default SortPanel;
