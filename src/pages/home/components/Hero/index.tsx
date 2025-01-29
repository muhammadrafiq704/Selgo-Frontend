import React from "react";
import { BannerImagesData } from "../data/BannerImages";
import "./styles.css";

const HeroSection: React.FC = () => {
  return (
    <div className="banner">
      <div className="curved-section">
        {BannerImagesData.map((image, index) => (
          <div className="image-gallery">
            <img
              key={index}
              src={image.img}
              alt="banner img"
              className="banner-image"
              // height={340}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
