import React from "react";
import "./styles.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import { categories } from "./components/data/CategoryData";
import { NavLink } from "react-router-dom";
import Category from "../../components/Category/Category";
import cardData from "./components/data/Card";
import Card from "../../components/Card/Card";
import Button from "../../components/Button";

const Target: React.FC = () => {
  return (
    <>
      <h3>The Square</h3>
      <div className="target-container">
        <div className="search-bar">
          <SearchBar width={600} />
        </div>
        <div className="categories">
          {categories.map((category, index) => (
            <NavLink to={`${category.path}`}>
              <Category
                key={index}
                title={category.name}
                icon={category.icon}
              />
            </NavLink>
          ))}
        </div>
        <Card data={cardData} />
        <NavLink to='/cardPage'>

        <Button variant="filled" name="Read More" height={50} width={140}  />
        </NavLink>
      </div>
    </>
  );
};

export default Target;
