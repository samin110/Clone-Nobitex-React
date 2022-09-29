import React from "react";
import Header from "../Components/Header";
import CryptoTable from "../Components/Crypto/CryptoTable";
import Slider from "../Components/Slider/Slider";

const HomePage = () => {
  return (
    <div>
      <Header />
      <CryptoTable />
      <Slider />
    </div>
  );
};

export default HomePage;
