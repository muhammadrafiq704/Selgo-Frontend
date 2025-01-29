import React from "react";
import "./styles.css";
import Button from "../Button";

type SearchBarProps = {
  width?: number;
  height?: number;
  placeholder?: string;
  onSearch?: (value: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search",
  width,
  height,
  onSearch,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
    <>
      <div className="search-container">
        <div className="search-bar" style={{ width: width, height: height }}>
          <img src="/assets/images/Banner/search-01.png" alt="search" />
          <input
            type="text"
            placeholder={placeholder}
            onChange={handleInputChange}
          />
        </div>
        <Button
          variant="icon-btn"
          name="Map"
          width={102}
          height={60}
          icon="/assets/icons/Button/maps-location-01.png"
        />
      </div>
    </>
  );
};

export default SearchBar;
