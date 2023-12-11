import React from "react";
import Slider from "../../components/Slider/Slider";
import FeatureProducts from "../../components/FeatureProducts/FeatureProducts";
import TrendingProducts from "../../components/TrendingProducts/TrendingProducts";
import "./Home.scss";
import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact";
const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeatureProducts type={"Featured"} />
      <Categories />
      <TrendingProducts type={"Trending"} />
      <Contact />
    </div>
  );
};

export default Home;
