import React from "react";

function NavBar({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <a
            href="#home"
            className={`nav-link ${currentPage === "home" && "active"}`}
            onClick={() => handlePageChange("home")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#contact-me"
            className={`nav-link ${currentPage === "ContactMe" && "active"}`}
            onClick={() => handlePageChange("ContactMe")}
          >
            Contact Me
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className={`nav-link ${currentPage === "Portfolio" && "active"}`}
            onClick={() => handlePageChange("Portfolio")}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#resume"
            className={`nav-link ${currentPage === "Resume" && "active"}`}
            onClick={() => handlePageChange("Resume")}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
