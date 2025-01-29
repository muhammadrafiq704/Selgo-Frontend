import React from "react";
import "./styles.css";
import Logo from "./components/Logo";
import { NavLink } from "react-router-dom";
import Footerlinks from "./components/Footerlinks";
import FacebookIcon from './components/icons/FacebookIcon'
import  DribbleIcon  from "./components/icons/WebsiteIcon";
import InstagramIcon from "./components/icons/InstagramIcon";
import TwitterIcon from "./components/icons/TwitterIcon";


const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-details">
        {/* logo and footer links component  */}
        <Logo />
        <Footerlinks />
      </div>
      <div className="social-section">
        <p>@2024 copyrights all reserved by selgo</p>
        <div className="social-icons">
          <NavLink to={""}>
            <FacebookIcon />
          </NavLink>
          <NavLink to={""}>
            <DribbleIcon />
          </NavLink>
          <NavLink to={""}>
            <InstagramIcon />
          </NavLink>
          <NavLink to={""}>
            <TwitterIcon />
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
