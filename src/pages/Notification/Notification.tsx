import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Notification: React.FC = () => {
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <div style={{display:'flex', gap:'10px'}}>
        <NavLink to="saved-search">Saved Search</NavLink>
        <NavLink to="check-out">Check Out</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Notification;
