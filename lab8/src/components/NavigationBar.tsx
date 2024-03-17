import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavigationBar() {
  const location = useLocation();
  const linkText = location.pathname.split("/")[1];
  const formattedLinkText =
    linkText.charAt(0).toUpperCase() + linkText.slice(1);
  return (
    <div className="navigation-bar">
      <Link to="/">Home</Link>
      <span> {">"} </span>
      <Link to={location.pathname}>{formattedLinkText}</Link>
    </div>
  );
}

export default NavigationBar;
