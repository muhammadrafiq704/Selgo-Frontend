import SearchBar from "../../../../components/SearchBar/SearchBar";
import "../../styles.css";
import CategoriesFilterData from "../data/CategoriesFilterData";
import Card from "../../../../components/Card/Card";
import CategoriesFilter from "../../../../components/CategoryFilters/CategoriesFilter";


const CardPage = () => {
  return (
    <div className="container">
      <div className="target-container">
        <div className="search-bar">
          <SearchBar />
          <div className="filter-card-container-wrapper">
            <div className="card-filter-wrapper">
              <CategoriesFilter />
            </div>
            <div className="card_content_parent">
              <Card data={CategoriesFilterData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPage;
