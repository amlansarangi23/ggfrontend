"use client";
import { useState } from "react";

const products = [
  { id: 1, name: "Product 1", price: "$10", description: "Description for Product 1" },
  { id: 2, name: "Product 2", price: "$20", description: "Description for Product 2" },
  { id: 3, name: "Product 3", price: "$30", description: "Description for Product 3" },
];

export default function Product() {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleAddProduct = () => {
    // Add validation logic here if needed
    const nextProductId = products.length + 1;
    const updatedProducts = [
      ...products,
      { ...newProduct, id: nextProductId },
    ];

    console.log("New product:", newProduct);
    console.log("Updated products:", updatedProducts);
  };

  return (
    <div className="flex-1 bg-gray-900 p-10 h-screen">
      <table className="min-w-full divide-y divide-gray-700 mb-[20vh]">
        <thead className="bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Product Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Description
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-900 divide-y divide-gray-700">
          {products.map((product) => (
            <tr key={product.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {product.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {product.price}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {product.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Form for adding a new product */}
      <div className="">
        <div className="flex items-center mb-4">
          <label htmlFor="name" className="w-24 font-medium text-gray-300">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={handleInputChange}
            className="flex-1 ml-2 bg-gray-800 text-gray-300 border-gray-700 rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="flex items-center mb-4">
          <label htmlFor="price" className="w-24 font-medium text-gray-300">
            Price
          </label>
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={newProduct.price}
            onChange={handleInputChange}
            className="flex-1 ml-2 bg-gray-800 text-gray-300 border-gray-700 rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="flex items-center mb-4">
          <label htmlFor="description" className="w-24 font-medium text-gray-300">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Description"
            value={newProduct.description}
            onChange={handleInputChange}
            className="flex-1 ml-2 bg-gray-800 text-gray-300 border-gray-700 rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button
          onClick={handleAddProduct}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Product
        </button>
      </div>
    </div>
  );
}