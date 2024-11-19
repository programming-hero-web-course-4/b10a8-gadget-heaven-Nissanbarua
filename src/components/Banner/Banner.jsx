import React from "react";
import BannerImg from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <section>
      <div className="hero bg-[#9538E2] min-h-screen text-white ">
        <div className="hero-content text-center">
          <div className="mx-28">
            <h1 className="text-5xl font-bold">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="py-6">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories,
              <br /> we have it all!
            </p>
            <button className="btn btn-primary text-black bg-white rounded-3xl">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="relative -top-28">
        <div >
          <img className="rounded-3xl  mx-auto h-[563px] " src={BannerImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
