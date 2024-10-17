import React, { useState } from "react";

function RotateArray() {
  const [arrayInput, setArrayInput] = useState("");
  const [steps, setSteps] = useState("");
  const [rotatedArray, setRotatedArray] = useState(null);

  const handleRotateArray = () => {
    const arr = arrayInput.split(",").map(Number);
    const k = parseInt(steps, 10) % arr.length; // Calculate effective steps
    const rotated = [...arr.slice(-k), ...arr.slice(0, -k)]; // Rotate array by k steps
    setRotatedArray(rotated);
  };

  return (
    <div className="p-4 shadow-md rounded-lg bg-white max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Rotate Array</h2>
      <input
        type="text"
        placeholder="Enter numbers separated by commas"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        value={arrayInput}
        onChange={(e) => setArrayInput(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter number of steps to rotate"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
      />
      <button
        onClick={handleRotateArray}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Rotate Array
      </button>
      {rotatedArray && (
        <p className="mt-4 text-lg font-medium">
          Rotated Array: {rotatedArray.join(", ")}
        </p>
      )}
    </div>
  );
}

export default RotateArray;
