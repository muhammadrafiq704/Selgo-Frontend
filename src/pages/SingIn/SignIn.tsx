import React from "react";
import ImageSection from "./components/ImageSection";
import DetailsSection from "./components/DetailsSection";
import "./styles.css";

const SignIn: React.FC = () => {
  return (
    <div className="signin-contianer">
      <ImageSection />
      <DetailsSection />
    </div>
  );
};

export default SignIn;
