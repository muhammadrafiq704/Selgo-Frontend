import React from "react";
import "./banner.css"; // Importing the CSS file

const Banner: React.FC = () => {
  return (
      <div className="banner-images">
        <img src="/assets/images/Banner/banner2.png" alt="Chair" className="banner-image" />
        <img src="/assets/images/Banner/banner3.png" alt="Sunglasses" className="banner-image" />
        <img src="/assets/images/Banner/banner4.png" alt="Car" className="banner-image" />
        <img src="/assets/images/Banner/banner5.png" alt="Car" className="banner-image" />
        <img src="/assets/images/Banner/banner1.png" alt="Car" className="banner-image" />
      </div>
  );
};

export default Banner;
