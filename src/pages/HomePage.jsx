import React from "react";
import Header from "../Components/Header";
import CryptoTableHomePage from "../Components/CryptoTableHomePage/CryptoTableHomePage";
import Slider from "../Components/Slider/Slider";
import Advantages from "../Components/Advantages/Advantages";
import Statistics from "../Components/Statistics/Statistics";

const HomePage = () => {
  return (
    <div>
      <Header />
      <CryptoTableHomePage />
      <Slider />
      <Advantages />
      <Statistics />
    </div>
  );
};

export default HomePage;
