import { NavLink } from "react-router-dom";
import Category from "../../../../../components/Category/Category";
import { Categories } from "../../../data/CategoryData";
import "./styles.css";
const CategoryCard = () => {
  return (
    <>
      <div className="category-container">
        {Categories.map((category, index) => (
          <NavLink to={category.path}>
            <Category key={index} title={category.title} icon={category.icon} />
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default CategoryCard;
