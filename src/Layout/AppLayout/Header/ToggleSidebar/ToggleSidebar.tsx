import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import React from "react";
import { SidebarData } from "./data/SidebarData";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";
// import MenuIcon from "../icons/MenuIcon";

interface ToggleSidebarProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToggleSidebar: React.FC<ToggleSidebarProps> = ({ setOpen }) => {
  const toggleDrawerClose = (close: boolean) => {
    setOpen(close);
  };
  return (
    <Box sx={{ width: 300 }} role="presentation" aria-hidden="true">
      <p onClick={() => toggleDrawerClose(false)} className="logo-name">
        Selgo
      </p>
      <Divider />
      <List>
        {SidebarData.map((text, index) => (
          <NavLink to={`${text.path}`} style={{ textDecoration: "none" }}>
            <ListItem
              key={index}
              disablePadding
              onClick={() => toggleDrawerClose(false)}
            >
              <ListItemButton>
                <ListItemIcon>
                  <img src={text.icon} alt="icon" />
                </ListItemIcon>
                <ListItemText
                  secondary={
                    <Typography
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        color: "#007272",
                      }}
                    >
                      {text.title}
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Box>
  );
};

export default ToggleSidebar;
