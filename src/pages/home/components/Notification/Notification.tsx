import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import "./styles.css";
import Button from "../../../../components/Button";
import appPaths from "../../../../utils/routesPath";

const Notification: React.FC = () => {
  const { pathname } = useLocation();
  console.log("pathname", pathname);

  // matched path urls
  let isPathMatched = pathname.slice(appPaths.NOTIFICATION.length);
  isPathMatched = isPathMatched.startsWith("/")
    ? isPathMatched.slice(1)
    : isPathMatched;

  return (
    <>
      <div className="notification-header">
        <h2>Notification</h2>
        <div className="notification-link">
          <div>
            <NavLink
              to="/notification"
              style={{
                fontWeight: isPathMatched === "" ? "bold" : "",
                borderBottom:
                  isPathMatched === "" ? "2px solid #007272" : "none",
              }}
            >
              Saved Search
            </NavLink>
            <NavLink
              to="check-out"
              style={{
                fontWeight: isPathMatched === appPaths.CHECKOUT ? "bold" : "",
                borderBottom:
                  isPathMatched === appPaths.CHECKOUT
                    ? "2px solid #007272"
                    : "none",
              }}
            >
              Check Out
            </NavLink>
          </div>
          <Button variant="outlined" name="Mark all as read" />
        </div>
      </div>
      <div className="children-container">
        <Outlet />
      </div>
    </>
  );
};

export default Notification;
