import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";

import Sidebar from "../../components/Sidebar/Sidebar";
import ProductCard from "../../components/ProductCard/ProductCard";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = [
    "All",
    "Smartphones",
    "Watches",
    "Laptops",
    "Accessories",
  ];
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("../../../public/gadgetheaven.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div>
      <Banner></Banner>
      <div>
        <h2 className="font-bold text-4xl text-center mb-10">
          Explore Cutting-Edge Gadgets
        </h2>
        <div className="flex gap-4">
          <Sidebar
            categories={categories}
            activeCategory={activeCategory}
            handleCategoryChange={handleCategoryChange}
          ></Sidebar>
          <main className="w-3/4">
            {loading ? (
              <p>Loading products...</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 gap-4">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.product_id}
                    product={product}
                  ></ProductCard>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
