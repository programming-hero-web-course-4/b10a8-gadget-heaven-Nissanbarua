import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const id = parseInt(productId);

  const data = useLoaderData();

  const product = data.find((product) => product.product_id == id);

  const {
    product_id,
    product_image,
    product_title,
    description,
    specification,
    availability,
    rating,
    price,
  } = product;

  const [cartList, setCartList] = useState([]);
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const storeCartList = JSON.parse(localStorage.getItem("cart-list")) || [];
    const storedWishList = JSON.parse(localStorage.getItem("wish-list")) || [];
  }, []);

  const addToCart = (id) => {
    if (cartList.includes(id)) {
      toast.warning("Item is already in the Cart!");
    } else {
      const updatedCartList = [...cartList, id];
      setCartList(updatedCartList);
      localStorage.setItem("cart-list", JSON.stringify(updatedCartList));
      toast.success("Added to Cart!");
    }
  };

  const addToWishList = (id) => {
    if (wishList.includes(id)) {
      toast.warning("Item is already in the Wishlist!");
    } else {
      const updatedWishList = [...wishList, id];
      setWishList(updatedWishList);
      localStorage.setItem("wish-list", JSON.stringify(updatedWishList));
      toast.success("Added to Wishlist!");
    }
  };

  return (
    <div>
      <h2> </h2>
      <div className="hero bg-white w-4/5 mx-auto ">
        <div className="hero-content flex-col lg:flex-row md:space-x-8">
          <div>
            <img src={product_image} className="max-w-sm rounded-lg " />
          </div>
          <div>
            <h1 className="text-2xl font-bold">{product_title} </h1>
            <p>Price : {price}</p>

            {/* <div className="badge badge-accent badge-outline">{} </div> */}
            <p>{description} </p>
            <h3> Specification:</h3>
            <ul className="list-disc">
              {specification.map((spec, index) => (
                <li key={index}> {spec} </li>
              ))}
            </ul>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-bold">Rating:</span>
              <span className="text-yellow-500 text-lg">
                {"⭐".repeat(Math.floor(product.rating))} (
                {product.rating.toFixed(1)})
              </span>
            </div>
            <ToastContainer></ToastContainer>
            <button
              onClick={() => addToCart(id)}
              className="btn bg-[#9538E2] text-white rounded-full btn-primary"
            >
              Add To Cart <MdOutlineShoppingCart></MdOutlineShoppingCart>{" "}
            </button>

            <button
              onClick={() => addToWishList(id)}
              className="ml-4 btn rounded-full"
            >
              {" "}
              <FaRegHeart></FaRegHeart>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
