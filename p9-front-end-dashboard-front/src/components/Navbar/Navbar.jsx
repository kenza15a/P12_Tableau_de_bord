import React from "react";
import "./navbar.css";
import logo from "../../logo512.png";
function Navbar() {
  return (
    <div>
      <div className="nav">
        <ul className="nav-list">
          <li>
            <a href="/">
              <img className="logo" src={logo} alt="logo"></img>
            </a>
          </li>
          <li>
            <a href="/Accueil">Accueil</a>
          </li>
          <li>
            <a href="/Profile">Profile</a>
          </li>
          <li>
            <a href="/Reglage">Reglage</a>
          </li>
          <li>
            <a href="/Communauté">communauté</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
