import React, { useState } from "react";

function FindMaxElement() {
  const [arrayInput, setArrayInput] = useState("");
  const [maxElement, setMaxElement] = useState(null);

  const handleFindMax = () => {
    const arr = arrayInput.split(",").map(Number);
    if (arr.length === 0) return;
    const max = Math.max(...arr); // Find the maximum element
    setMaxElement(max);
  };

  return (
    <div className="mb-10 p-4 shadow-md rounded-lg bg-white max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Find Maximum Element</h2>
      <input
        type="text"
        placeholder="Enter numbers separated by commas"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        value={arrayInput}
        onChange={(e) => setArrayInput(e.target.value)}
      />
      <button
        onClick={handleFindMax}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Find Maximum
      </button>
      {maxElement !== null && (
        <p className="mt-4 text-lg font-medium">
          Maximum Element: {maxElement}
        </p>
      )}
    </div>
  );
}

export default FindMaxElement;
