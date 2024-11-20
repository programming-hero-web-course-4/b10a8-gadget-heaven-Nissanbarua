import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";

const ProductDetails = () => {
  const { productId } = useParams();
  console.log(productId);

  const data = useLoaderData();

  const product = data.find((product) => product.product_id == productId);

  const {
    product_image,
    product_title,
    description,
    specification,
    availability,
    rating,
    price,
  } = product;

  return (
    <div>
      <h2>This is : {productId} </h2>
      <div className="hero bg-white w-4/5 mx-auto ">
        <div className="hero-content flex-col lg:flex-row md:space-x-8">
        <div>
        <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
        </div>
          <div>
            <h1 className="text-2xl font-bold">{product_title} </h1>
            <p>Price : {price}</p>

            {/* <div className="badge badge-accent badge-outline">{} </div> */}
            <p>{description} </p>
            <h3> Specification:</h3>
           <ul className="list-disc">
           {specification.map((spec) => (
                <li> {spec} </li>
              ))}
           </ul>
           <div className="flex items-center gap-2 mb-4">
                <span className="font-bold">Rating:</span>
                <span className="text-yellow-500 text-lg">
                  {"⭐".repeat(Math.floor(product.rating))} (
                  {product.rating.toFixed(1)})
                </span>
              </div>

            <button className="btn bg-[#9538E2] text-white rounded-full btn-primary">Add To Card</button>
            <button className="ml-4 btn rounded-full" > <FaRegHeart></FaRegHeart> </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
