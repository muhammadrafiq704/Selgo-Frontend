import React from "react";
import "./styles.css";

interface CardProps {
  title: string;
  icon: string;
}

const Category: React.FC<CardProps> = ({ title, icon }) => {
  return (
    <div className="category">
      <div className="category-detail">
        <img src={icon} alt="icon" className="icon" />
        <h3 className="name">{title}</h3>
      </div>
    </div>
  );
};

export default Category;
