"use client";
import React, { useState } from "react";

const WarehouseForm = () => {
  const [totalSpace, setTotalSpace] = useState("");
  const [goldzoneSize, setGoldzoneSize] = useState("");
  const [smallSortableSize, setSmallSortableSize] = useState("");
  const [largeSortableSize, setLargeSortableSize] = useState("");
  const [largeNonSortableSize, setLargeNonSortableSize] = useState("");
  const [numberOfSubsections, setNumberOfSubsections] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
    console.log("Form submitted!");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md m-auto bg-slate-400 p-6 shadow-slate-700 shadow-xl rounded px-12 pt-10 pb-10 mb-4 mt-10 text-lg border-2 border-slate-800">
      <div className="mb-4">
        <label htmlFor="totalSpace" className="block text-gray-700 text-lg font-bold mb-2">Total Space of Inventory:</label>
        <input
          type="number"
          id="totalSpace"
          value={totalSpace}
          onChange={(e) => setTotalSpace(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          placeholder="Enter total space..."
        />
      </div>
      <div className="mb-4">
        <label htmlFor="goldzoneSize" className="block text-gray-700 text-lg  font-bold mb-2">Size Allotted to Goldzone Area:</label>
        <input
          type="number"
          id="goldzoneSize"
          value={goldzoneSize}
          onChange={(e) => setGoldzoneSize(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          placeholder="Enter goldzone size..."
        />
      </div>
      <div className="mb-4">
        <label htmlFor="smallSortableSize" className="block text-gray-700 text-lg  font-bold mb-2">Size Allotted to Small Sortable Area:</label>
        <input
          type="number"
          id="smallSortableSize"
          value={smallSortableSize}
          onChange={(e) => setSmallSortableSize(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          placeholder="Enter small sortable size..."
        />
      </div>
      <div className="mb-4">
        <label htmlFor="largeSortableSize" className="block text-gray-700 text-lg  font-bold mb-2">Size Allotted to Large Sortable Area:</label>
        <input
          type="number"
          id="largeSortableSize"
          value={largeSortableSize}
          onChange={(e) => setLargeSortableSize(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          placeholder="Enter large sortable size..."
        />
      </div>
      <div className="mb-4">
        <label htmlFor="largeNonSortableSize" className="block text-gray-700 text-lg  font-bold mb-2">Size Allotted to Large Non-Sortable Area:</label>
        <input
          type="number"
          id="largeNonSortableSize"
          value={largeNonSortableSize}
          onChange={(e) => setLargeNonSortableSize(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          placeholder="Enter large non-sortable size..."
        />
      </div>
      <div className="mb-4">
        <label htmlFor="numberOfSubsections" className="block text-gray-700 text-lg  font-bold mb-2">Number of Subsections in Each Zone:</label>
        <input
          type="number"
          id="numberOfSubsections"
          value={numberOfSubsections}
          onChange={(e) => setNumberOfSubsections(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          placeholder="Enter number of subsections..."
        />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 shadow-md shadow-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
    </form>
  );
};

export default WarehouseForm;
