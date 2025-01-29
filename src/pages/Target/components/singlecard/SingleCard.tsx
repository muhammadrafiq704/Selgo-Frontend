import { useState } from "react";
import "./SingleCard.css";
import "../../styles.css";
import { useNavigate } from "react-router-dom";

const SingleCard = () => {
  const images = [
    "/assets/images/target/Rectangle 2.png",
    "/assets/images/target/Rectangle 4.png",
    "/assets/images/target/Rectangle 5.png",
    "/assets/images/target/Rectangle 6.png",
    "/assets/images/target/Rectangle 7.png",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(1);

  const navigate = useNavigate();

  const handleImageClick = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index + 1);
  };
  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="container">
        {/* Back Arrow */}
        <div className="top-child-wrapper">
          <div className="back-arrow" onClick={handleBackClick}>
            <img
              src="/assets/icons/target/back.png"
              alt="Back"
              className="back-arrow-icon"
            />
          </div>
          <div className="image-counter">
            {currentIndex} / {images.length}
          </div>
        </div>
        <div className="product-view">
          <div className="left-items-wrapper">
            <div className="breadcrumbs">Chair / Meryl Lounge Chair</div>
            <h1 className="title">Meryl Lounge Chair</h1>
            <p className="price">$149.99</p>
            <p className="description">
              The gently curved lines accentuated by sewn details are kind to
              your body and pleasant to look at. Also, there's a tilt and
              height-adjusting mechanism that's built to outlast years of ups
              and downs.
            </p>

            <div className="color-options">
              <span
                className="color-dot"
                style={{ backgroundColor: "rgba(193, 189, 179, 1)" }}
              ></span>
              <span
                className="color-dot"
                style={{ backgroundColor: "rgba(88, 115, 125, 1)" }}
              ></span>
              <span
                className="color-dot"
                style={{ backgroundColor: "rgba(84, 84, 84, 1)" }}
              ></span>
              <span
                className="color-dot"
                style={{ backgroundColor: "rgba(203, 165, 165, 1)" }}
              ></span>
            </div>
            <div className="buttons">
              <button className="btn primary">Send message</button>
              <button className="btn secondary">Ask for fix done</button>
            </div>
            <p className="info">
              Free 3-5 day shipping • Tool-free assembly • 30-day trial
            </p>
            <div className="social-icons-whitekist-wrapper">
              <div className="icon-whitelist-wrapper">
                <img
                  src="/assets/icons/target/Vector.png"
                  alt=""
                  className="heart-icon"
                />
                <a href="#" className="wishlist">
                  Add to Wishlist
                </a>
              </div>
              <div className="social-icons">
                <i className="icon facebook">
                  <img
                    src="/assets/icons/target/facebook.png"
                    alt=""
                    className="facebook-img"
                  />
                </i>
                <i className="icon twitter">
                  <img
                    src="/assets/icons/target/twitter.png"
                    alt=""
                    className="twitter-img"
                  />
                </i>
                <i className="icon pinterest">
                  <img
                    src="/assets/icons/target/pinterest.png"
                    alt=""
                    className="pinterest-img"
                  />
                </i>
                <i className="icon instagram">
                  <img
                    src="/assets/icons/target/instagram.png"
                    alt=""
                    className="instagram-img"
                  />
                </i>
              </div>
            </div>
          </div>
          <div className="image-gallery">
            <div className="main-image">
              <img
                className="chair-main-image"
                src={selectedImage}
                alt="Chair"
              />
            </div>

            <div className="thumbnail-container">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className={`thumbnail ${
                    selectedImage === image ? "active" : ""
                  }`}
                  onClick={() => handleImageClick(image, index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
