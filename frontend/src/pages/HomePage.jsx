import React from "react";
import HeroSection from "../components/home/HeroSection";
import Slider from "../components/home/Slider";
import Navbar from "../Navbar";

const HomePage = () => {
  return (
    <>
    <div className="flex">
      <HeroSection />
      <div>
        <Slider />
      </div>
    </div>
    </>
  );
};

export default HomePage;
