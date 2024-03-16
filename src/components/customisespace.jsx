"use client";
import React, { useState } from "react";

const WarehouseForm = () => {
  const [totalSpace, setTotalSpace] = useState("");
  const [goldzoneSize, setGoldzoneSize] = useState("");
  const [inventoryName, setinventoryName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
    console.log("Form submitted!");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md m-auto bg-slate-400 p-6 shadow-slate-700 shadow-xl rounded-xl px-12 pt-10 pb-10 mb-4 mt-10 text-lg border-2 border-slate-800">
       <h1 className="text-2xl text-center underline mb-5">Fill inventory details</h1>
       <div className="mb-4">
        <label htmlFor="inventoryName" className="block text-gray-700 text-lg  font-bold mb-2">Inventory Name:</label>
        <input
          type="text"
          id="inventoryName"
          value={inventoryName}
          onChange={(e) => setinventoryName(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          placeholder="Enter inventory name"
        />
      </div>
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
      
      
      <button type="submit" className="bg-stone-800 hover:bg-slate-600 shadow-md shadow-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
    </form>
  );
};

export default WarehouseForm;
