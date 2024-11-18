import React from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="container mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
