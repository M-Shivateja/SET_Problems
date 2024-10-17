import React, { useState } from "react";

function RemoveDuplicates() {
  const [arrayInput, setArrayInput] = useState("");
  const [newLength, setNewLength] = useState(null);

  const handleRemoveDuplicates = () => {
    const arr = arrayInput.split(",").map(Number);
    const uniqueArray = [...new Set(arr)]; // Remove duplicates using Set
    setNewLength(uniqueArray.length);
  };

  return (
    <div className="p-4 shadow-md rounded-lg bg-white max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Remove Duplicates</h2>
      <input
        type="text"
        placeholder="Enter sorted numbers separated by commas"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        value={arrayInput}
        onChange={(e) => setArrayInput(e.target.value)}
      />
      <button
        onClick={handleRemoveDuplicates}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Remove Duplicates
      </button>
      {newLength !== null && (
        <p className="mt-4 text-lg font-medium">New length: {newLength}</p>
      )}
    </div>
  );
}

export default RemoveDuplicates;
