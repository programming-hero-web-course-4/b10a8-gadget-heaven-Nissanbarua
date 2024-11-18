import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className=" justify-center  bg-base-200 text-base-content border-base-300 border-b px-10 py-4">
        <div className="text-center justify-center items-center">
          <h3 className="font-bold text-3xl text-center">Gadget Heaven</h3>
          <p className="text-center">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
      </footer>
      <footer className="footer bg-base-200 text-base-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
