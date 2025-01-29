import React from "react";
import "./styles.css";

import { NavLink } from "react-router-dom";
import MenuIcon from "./icons/MenuIcon";
import AddIcon from "./icons/AddIcon";
import MessageIcon from "./icons/MessageIcon";
import NotificationIcon from "./icons/NotificationIcon";
import AvatarIcon from "./icons/AvatarIcon";
import { Drawer } from "@mui/material";
import ToggleSidebar from "./ToggleSidebar/ToggleSidebar";

const Header: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  return (
    <>
      <header className="header-container">
        <div className="menu-icon" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </div>
        <NavLink to="/" className="logo">
          Selgo
        </NavLink>
        <div className="icons">
          {" "}
          <NavLink to="/advertise">
            <AddIcon />
          </NavLink>
          <NavLink to="">
            <MessageIcon />
          </NavLink>
          <NavLink to="/notification">
            <NotificationIcon />
          </NavLink>
          <NavLink to="">
            <AvatarIcon />
          </NavLink>
        </div>
      </header>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <ToggleSidebar setOpen={setOpen} />
      </Drawer>
    </>
  );
};

export default Header;
