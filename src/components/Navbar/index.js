import React from "react";
// link component of react-router-dom allows for change in path on view without reload
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    // nav brand name of page
    <nav className="navbar navbar-expand-lg">
      <Link className="navbar-brand" to="/">
        Select here for Company Directory
      </Link>
      <div>
        <ul className="navbar-nav">
          {/* link to home page at root and at /home */}
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/company-directory"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
