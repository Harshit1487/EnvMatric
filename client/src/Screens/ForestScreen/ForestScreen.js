import React from "react";
import "./Forestscreen.css";

const ForestScreen = () => {
  return (
    <div className="container arforest my-5">
      <div className="arhead ">
        <h1 className="text-center">Have a Look at our Models</h1>
      </div>

      <div className="container-fluid modelsar my-3">
        <div className="row modelsa my-5">
          <div className="col-lg-5 col-md-5 col-sm-12 arcard">
            <div className="modelspace"></div>
            <div className="modelhead">
              <p> Model Name </p>
            </div>
          </div>

          <div className="col-lg-5 col-md-5 col-sm-12 arcard">
            <div className="modelspace"></div>
            <div className="modelhead">
              <p> Model Name </p>
            </div>
          </div>
        </div>



        <div className="row modelsa my-2">
          <div className="col-lg-5 col-md-5 col-sm-12 arcard">
            <div className="modelspace"></div>
            <div className="modelhead">
              <p> Model Name </p>
            </div>
          </div>

          <div className="col-lg-5 col-md-5 col-sm-12 arcard">
            <div className="modelspace"></div>
            <div className="modelhead">
              <p> Model Name </p>
            </div>
          </div>
        </div>

        <div className="row modelsa my-3">
          <div className="col-lg-5 col-md-5 col-sm-12 arcard">
            <div className="modelspace"></div>
            <div className="modelhead">
              <p> Model Name </p>
            </div>
          </div>

          <div className="col-lg-5 col-md-5 col-sm-12 arcard">
            <div className="modelspace"></div>
            <div className="modelhead">
              <p> Model Name </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForestScreen;
