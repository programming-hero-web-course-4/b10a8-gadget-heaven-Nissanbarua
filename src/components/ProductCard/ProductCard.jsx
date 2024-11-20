import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { product_id, product_title, product_image, category, price } = product;
  return (
    <div className="card bg-base-100  shadow-xl ">
      <figure className="px-8 pt-10">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="rounded-xl h-[180px] "
        />
      </figure>
      <div className="card-body space-y-2">
        <h2 className="card-title font-semibold">{product_title} </h2>
        <p className="font-medium">Price : {price} </p>
        <div className="card-actions">
          <Link to={`/products/${product_id}`}>
            <button className="btn btn-outline rounded-full text-[#9538E2] font-semibold ">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
