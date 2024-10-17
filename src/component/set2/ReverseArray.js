import React, { useState } from "react";

function ReverseArray() {
  const [arrayInput, setArrayInput] = useState("");
  const [reversedArray, setReversedArray] = useState(null);

  const handleReverseArray = () => {
    const arr = arrayInput.split(",").map(Number);
    setReversedArray([...arr].reverse()); // Reverse the array in-place
  };

  return (
    <div className="mb-10 p-4 shadow-md rounded-lg bg-white max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Reverse Array</h2>
      <input
        type="text"
        placeholder="Enter numbers separated by commas"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        value={arrayInput}
        onChange={(e) => setArrayInput(e.target.value)}
      />
      <button
        onClick={handleReverseArray}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Reverse Array
      </button>
      {reversedArray && (
        <p className="mt-4 text-lg font-medium">
          Reversed Array: {reversedArray.join(", ")}
        </p>
      )}
    </div>
  );
}

export default ReverseArray;
