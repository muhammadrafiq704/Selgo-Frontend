import React from "react";
import "./styles.css";

const NotFound: React.FC = () => {
  return (
    <div className="notfound-container">
        <img src="/assets/images/NotFound/notfound.png  " alt="not-found" />
        <p>Oops! The page you're looking for doesn't exist.</p>
    </div>
  );
};

export default NotFound;



