import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import DataGrid from "../DataGrid/DataGrid";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src="https://spacex-ships-bsf.netlify.app/spacex-logo.jpg" alt="SpaceX Logo" />
      </Link>
      <Link to="/DataGrid">
       <h2> Capsules</h2>
      </Link>
      <Link to="/">
      <h3> Home</h3>
     </Link>

    </nav>
  );
};

export default Navbar;
