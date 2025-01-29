import React from "react";

const CurvedSection: React.FC = () => {
  return (
    <div>
      <div className="text-content">
        <h1 className="content-heading">
          Simplify your shopping with us – Finnish quality at your fingertips.
        </h1>
        <p className="content-paragraph">
          Uncover Inspiration, Get Motivated, and live a better life.
        </p>
      </div>

      <div className="curved-section">
        <div className="svg-image">
          <svg
            width="1499"
            height="232"
            viewBox="0 0 1499 232"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="720" cy="-125" rx="890" ry="357" fill="white" />
          </svg>
        </div>

        <div className="image-gallery">
          <img src="/assets/images/Banner/banner2.png" alt="Image 1" className="image" />
          <img src="/assets/images/Banner/banner2.png" alt="Image 2" className="image" />
          <img src="/assets/images/Banner/banner2.png" alt="Image 3" className="image" />
          <img src="/assets/images/Banner/banner2.png" alt="Image 4" className="image" />
          <img src="/assets/images/Banner/banner2.png" alt="Image 5" className="image" />
        </div>

        <div className="svg-image2">
          <svg
            width="1499"
            height="182"
            viewBox="0 0 1499 182"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="720" cy="357" rx="890" ry="357" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CurvedSection;
