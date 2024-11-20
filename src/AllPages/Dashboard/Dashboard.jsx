import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("cart");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const storedWishlist = JSON.parse(localStorage.getItem("wish-list")) || [];

    setCart(storedCart);
    setWishlist(storedWishlist);
  }, []);

  const handlePurchase = () => {
    alert("Purchase successful!");
    setCart([]); // Clear the cart after purchase
    localStorage.setItem("cart", JSON.stringify([])); // Update localStorage
  };

  return (
    <div>
      {/* Dashboard Header */}
      <div className="bg-purple-500 text-white p-8 text-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p>Manage your Cart and Wishlist here</p>
      </div>

      {/* Tab Buttons */}
      <div className="container mx-auto p-6">
        <div className="flex justify-center gap-4 mb-4">
          <button
            className={`py-2 px-6 rounded ${
              activeTab === "cart" ? "bg-purple-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("cart")}
          >
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

        {/* Cart Section */}
        {activeTab === "cart" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Cart</h2>
            {cart.length > 0 ? (
              <div>
                {cart.map((item, index) => (
                  <p key={index} className="mb-2">
                    {item.name} - ${item.price}
                  </p>
                ))}
                <button
                  onClick={handlePurchase}
                  className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
                >
                  Purchase
                </button>
              </div>
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>
        )}

        {/* Wishlist Section */}
        {activeTab === "wishlist" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Wishlist</h2>
            {wishlist.length > 0 ? (
              wishlist.map((item, index) => (
                <p key={index} className="mb-2">
                  {item.name} - ${item.price}
                </p>
              ))
            ) : (
              <p>Your wishlist is empty.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
