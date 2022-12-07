import React from "react";
import Header from "../Shared/Header";
import Blogs from "./Blogs/Blogs";
import Filters from "./Filters/Filters";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Filters></Filters>
      <Blogs></Blogs>
    </div>
  );
};

export default Home;
