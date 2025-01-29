import React from "react";
import SalesCard from "./Sales";
import "./styles.css";
import ProfileCard from "./Profile";
import ShopCard from "./Shop";
import Card from "../../../../components/Card/Card";
import cardData from "../data/Card";

const PopularAds: React.FC = () => {
  return (
    <div className="popular-ads">
      <h2>Popular Ads</h2>
      <div className="popular-cards">
        <ProfileCard />
        <SalesCard />
        <ShopCard />
      </div>
      {/* reuseble card component  */}
      <Card  data={cardData}/>  
    </div>
  );
};

export default PopularAds;
