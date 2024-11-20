import React, { useState } from "react";
import CartList from "../../Context/Cart/CartList";
import Wishlist from "../../Context/WishList/Wishlist";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("cart");

  return (
    <div>
      <div className="bg-purple-500 text-white p-8 text-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p>Manage your Cart and Wishlist here</p>
      </div>
      <div className="container mx-auto p-6">
        <div className="flex justify-center gap-4 mb-4">
          <button
            className={`py-2 px-6 rounded ${
              activeTab === "cart" ? "bg-purple-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("cart")}
          >
            {" "}
            Cart
          </button>
          <button
            className={`py-2 px-6 rounded ${
              activeTab === "wishlist"
                ? "bg-purple-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("wishlist")}
          >
            Wishlist
          </button>
        </div>
        {/* {activeTab === "cart" ? <CartList></CartList> : <Wishlist></Wishlist>} */}
      </div>
    </div>
  );
};

export default Dashboard;
