import React from "react";
import Welcome from "../welcome/Welcome";
import Product from "../product/Product";
import Blog from "../blog/Blog";

const MainPage = () => {
  return (
    <div>
      <Welcome />
      <Product />
      <Blog />
    </div>
  );
};

export default MainPage;
