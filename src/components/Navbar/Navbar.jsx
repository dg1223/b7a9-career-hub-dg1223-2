import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
      <h2>FutureOfWork</h2>
      <div className="routes">
          <Link to='/statistics'>Statistics</Link>
          <Link to='/applied-jobs'>Applied Jobs</Link>
          <Link to='/blogs'>Blog</Link>
      </div>
          <button>Start Applying</button>
    </nav>
  );
};

export default Navbar;