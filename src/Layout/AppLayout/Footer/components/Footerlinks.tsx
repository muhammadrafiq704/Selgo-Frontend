import React from "react";
import { NavLink } from "react-router-dom";
import { FooterDetailsLinks } from "./data/data";

const Footerlinks: React.FC = () => {
  return (
    <div className="links-section">
      {FooterDetailsLinks.map((item, index) =>
        item.title === "Commercial Activities" ? (
          <div key={index} className="sub-title">
            <p className="title">{item.title}</p>
            <NavLink to={""} className="link">
              {item.link1}
            </NavLink>
            <NavLink to={""} className="link">
              {item.link2}
            </NavLink>
            <NavLink to={""} className="link">
              {item.link3}
            </NavLink>
          </div>
        ) : item.title === "About Selgo" ? (
          <div key={index} className="sub-title">
            <p className="title">{item.title}</p>
            <NavLink to={""} className="link">
              {item.link1}
            </NavLink>
            <NavLink to={""} className="link">
              {item.link2}
            </NavLink>
            <NavLink to={""} className="link">
              {item.link3}
            </NavLink>
          </div>
        ) : item.title === "Terms and Conditions" ? (
          <div key={index} className="sub-title">
            <p className="title">{item.title}</p>
            <NavLink to={""} className="link">
              {item.link1}
            </NavLink>
            <NavLink to={""} className="link">
              {item.link2}
            </NavLink>
            <NavLink to={""} className="link">
              {item.link3}
            </NavLink>
            <NavLink to={""} className="link">
              {item.link4}
            </NavLink>
          </div>
        ) : item.title === "Terms and Privacy" ? (
          <div key={index} className="sub-title">
            <p className="title">{item.title}</p>
            <NavLink to={""} className="link">
              {item.link1}
            </NavLink>
            <NavLink to={""} className="link">
              {item.link2}
            </NavLink>
            <NavLink to={""} className="link">
              {item.link3}
            </NavLink>
            <NavLink to={""} className="link">
              {item.link4}
            </NavLink>
            <NavLink to={""} className="link">
              {item.link5}
            </NavLink>
            <NavLink to={""} className="link">
              {item.link6}
            </NavLink>
          </div>
        ) : null
      )}
    </div>
  );
};

export default Footerlinks;
