import React from "react";
import "./styles.css";
import SalesImage from "/assets/images/PopularAds/Sales/cardImg.png";

const SalesCard: React.FC = () => {
  return (
    <div className="sales-container">
      <p>Up to 70% off | Electronics clearance store</p>
      <img src={SalesImage} alt="shop img" />
      <span>See more</span>
    </div>
  );
};

export default SalesCard;
