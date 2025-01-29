import React from "react";
// data
import { categories } from "./data/CategoryData";
// import componets
import SearchBar from "../../../components/SearchBar/SearchBar";
import Category from "../../../components/Category/Category";
import BannerImage from "../../../components/banner/Banner";
import { NavLink } from "react-router-dom";
// import BannerSection from './Banner/index'


const Banner: React.FC = () => {
  return (
    <div className="banner">
      <div className="search-bar">
        <SearchBar  width={600} />
      </div>
      <div className="banner-title">
        <h1>
          Simplify your shopping with us – Finnish quality at your fingertips.
        </h1>
        <p>Uncover Inspiration, Get Motivated, and live a better life.</p>
      </div>
      <BannerImage />
      <div className="categories">
        {categories.map((category, index) => (
          <NavLink to={`${category.path}`} key={index}>
            <Category key={index} title={category.name} icon={category.icon} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Banner;
