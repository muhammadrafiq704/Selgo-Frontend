import React from "react";
import { NavLink } from "react-router-dom";
import ShopImage from '/assets/images/PopularAds/Shop/shopImg.png'
const ShopCard: React.FC = () => {
  return (
    <div className="shop-container">
      <div className="shop-title">
        <p>Shop on the Amazon App</p>
        <span>
          Fast, convenient and secure | Over 17 crore products in your pocket
        </span>
        <NavLink to="">Download the Amazon App</NavLink>
      </div>
      <img src={ShopImage} alt="shop-img" />
    </div>
  );
};

export default ShopCard;
