import React from "react";
import { Link, useHistory } from "react-router-dom";
import SEARCH from "../../assets/search.svg";
import PERSON from "../../assets/person.svg";
import STAR from "../../assets/star.svg";
import MENU from "../../assets/menu.svg";
import "./navbar.css";

const Navbar = () => {
  const history = useHistory();
  return (
    <nav className="nav-header">
      <div className="flex1">
        <div
          className="d-flex "
          style={{ width: "250px", alignItems: "center" }}
        >
          <div className="mr-2">
            <img src={STAR} alt="star" />
          </div>
          <div
            style={{ fontWeight: "700", cursor: "pointer" }}
            onClick={() => history.push("/")}
          >
            ACME CORP
          </div>
        </div>
        <div className="links">
          <div>
            <Link to="/">Dashboard</Link>
          </div>
          <div>Finances</div>
          <div>Projects</div>
          <div>Reporting</div>
          <div>Users</div>
        </div>
      </div>
      <div className="flex2">
        <div className="search">
          <div className="position-relative">
            <input type="text" placeholder="Search for Sites, Tools or Users" />
            <img src={SEARCH} alt="search" className="search-pos" />
          </div>
          <div className="d-flex align-items-center">
            <div className="mr-3">
              <img src={PERSON} alt="person" />
            </div>
            <div>
              <img src={MENU} alt="menu" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
