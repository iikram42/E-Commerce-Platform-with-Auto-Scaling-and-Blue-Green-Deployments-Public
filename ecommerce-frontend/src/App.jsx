import React from "react";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-indigo-600 text-white p-4 text-center text-2xl font-bold">
        E-Commerce Store
      </header>
      <main className="p-6">
        <Home />
      </main>
    </div>
  );
}