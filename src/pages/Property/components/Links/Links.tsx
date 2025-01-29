import { Links as linksData } from "../../data/links";
import { NavLink, useLocation } from "react-router-dom";
import "./styles.css";
import appPaths from "../../../../utils/routesPath";

const LinksComponent = () => {
  const { pathname } = useLocation();

  // matched path urls
  let isPathMatched = pathname.slice(appPaths.PROPERTY.length);
  isPathMatched = isPathMatched.startsWith("/")
    ? isPathMatched.slice(1)
    : isPathMatched;

  return (
    <>
      <div className="links">
        {linksData.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            style={{
              fontWeight: isPathMatched === link.path ? "bold" : "",
              borderBottom:
                isPathMatched === link.path ? "2px solid #007272" : "none",
              color: isPathMatched === link.path ? "#007272" : "",
            }}
            // style={({ isActive }) => {
            //   return isActive  ? { color: "#0b9e9e" } : {};
            // }}
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default LinksComponent;
