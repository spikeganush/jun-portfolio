import React from "react";
import "./header.css";
import "../../css/grid.css";

const Header = () => {
  return (
    <div>
      {" "}
      <div class="row">
        <div class="nav">
          <a class="col l-1 m-12 " href="/">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            About
          </a>
          <a class="col l-1 m-12 " href="/portfolio">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Portfolio
          </a>
          <a class="col l-1 m-12 " href="!#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
