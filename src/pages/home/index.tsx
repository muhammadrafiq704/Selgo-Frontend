import React from "react";
import Banner from "./components/Banner";
import PopularAds from "./components/PopularAds";
import "./styles.css";

const index: React.FC = () => {
  return (
    <> 
      <Banner />
      <PopularAds/>
    </>
  );
};

export default index;
