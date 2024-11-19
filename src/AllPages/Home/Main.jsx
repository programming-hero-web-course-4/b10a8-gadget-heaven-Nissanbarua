import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProductCard from "../../components/ProductCard/ProductCard";

const Main = () => {
  return (
    <div>
      <h2 className="font-bold text-4xl text-center mb-10">Explore Cutting-Edge Gadgets</h2>
      <div className="">
        <Sidebar></Sidebar>
        <ProductCard></ProductCard>
      </div>
    </div>
  );
};

export default Main;
