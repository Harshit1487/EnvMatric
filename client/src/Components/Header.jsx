import React from "react";
import "./CSS/HeaderS.css";

function Header() {
  return (
    <div>
      <div className="banner">
        <p>The Ultiamte Environment Website !!!!!</p>
      </div>
      <div className="container-fluid  header">
        <div className="heading ">
          <div className="logo">
            <p>Edu&nbsp;Vironment</p>
          </div>

          <div className="navlist">
            <ul>
              <li>Link1</li>
              <li>Link2</li>
              <li>Link 3</li>
              <li>Link 4</li>
            </ul>
          </div>
        </div>
        <div className="headings1 ">
          <ul>
            <li><i className="fa fa-search"></i> Search</li>
            <li>Store</li>
            <li>Cart ( 0 ) </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
