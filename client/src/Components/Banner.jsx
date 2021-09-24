import React from "react";
import "./CSS/Banner.css";
import Tree from "../Assets/tree.png";

function Banner() {
  return (
    <div>
      <div className="bannerss my-5">
        <img src={Tree} />
        <div className="textss">
          <h1>EduVironment</h1>
        </div>
      </div>
    </div>
  );
}

export default Banner;
