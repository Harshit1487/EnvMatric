import React from "react";
import {LinkContainer} from 'react-router-bootstrap'
function Features() {
  return (
    <div className="Featurelist">

      <h1>Unique in Our Website</h1>
      
      <div className="line1 my-3 py-5">
        <div class="card1">
          <h1>01</h1>
          <p>Upload Image</p>
        </div>
      

        <div class="card1">
          <h1>02</h1>
          <p>Image Wall</p>
        </div>

        <div class="card1">
          <h1>03</h1>
          <p>Grow Your Plant</p>
        </div>
      </div>


      <div className="line1">
        <div class="card1">
          <h1>04</h1>
          <p>AR Forest</p>
        </div>

        <div class="card1">
          <h1>05</h1>
          <p>Upcoming !!</p>
        </div>
       

      </div>
    </div>
  );
}

export default Features;