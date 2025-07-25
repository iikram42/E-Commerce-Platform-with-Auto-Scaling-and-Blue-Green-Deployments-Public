import React from "react";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <ProductList />
      <Cart />
      <Checkout />
    </div>
  );
}