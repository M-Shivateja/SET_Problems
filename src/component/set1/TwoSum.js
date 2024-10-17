import React, { useState } from "react";

function TwoSum() {
  const [arrayInput, setArrayInput] = useState("");
  const [target, setTarget] = useState("");
  const [result, setResult] = useState(null);

  const handleTwoSum = () => {
    const arr = arrayInput.split(",").map(Number);
    const targetSum = parseInt(target, 10);
    const indices = {};

    for (let i = 0; i < arr.length; i++) {
      const complement = targetSum - arr[i];
      if (indices[complement] !== undefined) {
        setResult([indices[complement], i]); // Return indices of the two numbers
        return;
      }
      indices[arr[i]] = i;
    }
    setResult(null);
  };

  return (
    <div className="p-4 shadow-md rounded-lg bg-white max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Two Sum</h2>
      <input
        type="text"
        placeholder="Enter numbers separated by commas"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        value={arrayInput}
        onChange={(e) => setArrayInput(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter target sum"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
      />
      <button
        onClick={handleTwoSum}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Find Indices
      </button>
      {result && (
        <p className="mt-4 text-lg font-medium">
          Indices: {result[0]}, {result[1]}
        </p>
      )}
      {!result && arrayInput && target && (
        <p className="mt-4 text-lg font-medium">No valid pair found.</p>
      )}
    </div>
  );
}

export default TwoSum;
