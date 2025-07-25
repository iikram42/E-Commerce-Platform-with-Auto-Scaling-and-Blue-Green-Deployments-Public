import React from "react";

const products = [
  { id: 1, name: "Product A", price: 20 },
  { id: 2, name: "Product B", price: 30 },
];

export default function ProductList() {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-2">Products</h2>
      {products.map((product) => (
        <div key={product.id} className="border p-2 mb-2 rounded">
          <div>{product.name}</div>
          <div>${product.price}</div>
          <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}