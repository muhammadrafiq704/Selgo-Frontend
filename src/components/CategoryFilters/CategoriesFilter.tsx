import React from "react";
import "./CategoriesFilter.css";

const CategoriesFilter: React.FC = () => {
  return (
    <div className="categories-filter">
      {/* Back link */}
      <a href="#" className="back-link">
        &lt; All categories
      </a>
      {/* Main category */}
      <div className="main-category">
        <button className="main-category-btn">Antiques and art</button>
      </div>
      {/* Subcategories */}
      <div className="subcategories">
        <button className="subcategory-btn">Antiques +</button>
        <button className="subcategory-btn">Porcelain and ceramics +</button>
        <button className="subcategory-btn">Art +</button>
        <button className="subcategory-btn">Cutlery +</button>
        <button className="subcategory-btn">Others +</button>
      </div>
      {/* Filters */}
      <div className="filters">
        <label className="filter-item">
          <input type="checkbox" />
          Fix finished (70,551)
        </label>
        <label className="filter-item">
          <input type="checkbox" />
          Free shipping (1,702)
        </label>
      </div>
      {/* Map Section */}
      <div className="map-section">
        <input type="text" placeholder="Search" className="search-input" />
        <div className="map-container">
          <div className="map">
            <img src="" alt="" />
          </div>
          <div className="map-controls">
            <button className="map-control-btn">+</button>
            <button className="map-control-btn">-</button>
          </div>
        </div>
        <div className="distance-slider">
          <label>Distance</label>
          <input type="range" min="0" max="50" className="slider" />
          <span>3 km</span>
        </div>
      </div>
      {/* Region Section */}
      <div className="region-section">
        <h3 className="region-title">Område</h3>
        <div className="region-list">
          {[
            "Agder (7,750)",
            "Akershus (24,544)",
            "Buskerud (9,054)",
            "Finnmark (293)",
            "Innlandet (8,428)",
            "Møre og Romsdal (3,863)",
            "Nordland (1,051)",
            "Oslo (25,027)",
            "Rogaland (12,940)",
            "Svalbard (1)",
            "Telemark (4,488)",
            "Troms (1,449)",
            "Trøndelag (9,361)",
            "Vestfold (9,602)",
            "Vestland (11,320)",
            "Østfold (11,894)",
          ].map((region) => (
            <label key={region} className="region-item">
              <input type="checkbox" />
              {region}
            </label>
          ))}
        </div>
      </div>
      {/* Buy or Rent Section */}
      <div className="buy-rent-section">
        <h3 className="region-title">Buy or Rent</h3>
        <label className="buy-rent-item">
          <input type="checkbox" />
          Buy (0)
        </label>
        <label className="buy-rent-item">
          <input type="checkbox" />
          Rent (0)
        </label>
      </div>
      {/* Type of Advertisement */}
      <div className="type-of-advertisement">
        <h3 className="region-title">Type of advertisement</h3>
        <label className="filter-item">
          <input type="checkbox" />
          For sale (139,883)
        </label>
        <label className="filter-item">
          <input type="checkbox" />
          Given (379)
        </label>
        <label className="filter-item">
          <input type="checkbox" />
          Wanted to buy (1,816)
        </label>
      </div>
      {/* Price Section */}
      <div className="price-section">
        <h3 className="region-title">Price</h3>
        <div className="price-inputs">
          <input type="text" placeholder="From" className="price-input" />
          <input type="text" placeholder="To" className="price-input" />
        </div>
        <button className="search-btn">Search</button>
      </div>
      {/* Private/Retailer Section */}
      <div className="private-retailer-section">
        <h3 className="region-title">Private/retailer</h3>
        <label className="filter-item">
          <input type="checkbox" />
          Private (950)
        </label>
        <label className="filter-item">
          <input type="checkbox" />
          Retailer (140,128)
        </label>
      </div>
      {/* New/Used Section */}
      <div className="new-used-section">
        <h3 className="region-title">New/used</h3>
        <label className="filter-item">
          <input type="checkbox" />
          Brand New (10)
        </label>
        <label className="filter-item">
          <input type="checkbox" />
          As used (29)
        </label>
        <label className="filter-item">
          <input type="checkbox" />
          Nicely used (71)
        </label>
        <label className="filter-item">
          <input type="checkbox" />
          Good used (115)
        </label>
        <label className="filter-item">
          <input type="checkbox" />
          Must be fixed (1)
        </label>
      </div>
      {/* Published Section */}
      <div className="published-section">
        <h3 className="region-title">Published</h3>
        <label className="filter-item">
          <input type="checkbox" />
          New today (3,198)
        </label>
      </div>
    </div>
  );
};

export default CategoriesFilter;
