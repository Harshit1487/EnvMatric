import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import "./Forestscreen.css";

const ForestScreen = () => {
  return (
    <div className="container arforest my-5">
      <div className="arhead ">
        <h1 className="text-center">Have a Look at our Models</h1>
      </div>
      <div className="arhead my-5">
        <h1 className="text-center">VR Models</h1>
      </div>

      <div className="container-fluid modelsar my-3">
        <div className="row modelsa my-5">
          <div className="col-lg-5 col-md-5 col-sm-12">
            <iframe sandbox="allow-scripts allow-same-origin allow-popups allow-forms" frameborder="0" width="100%" height="550" src="https://sketchfab.com/models/faef9fe5ace445e7b2989d1c1ece361c/embed"></iframe>

            <div className="modelhead mb-5">
              <p> Shiba Inu </p>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12">
            <iframe sandbox="allow-scripts allow-same-origin allow-popups allow-forms" frameborder="0" width="100%" height="550" src="https://sketchfab.com/models/16c3444c8d1440fc97fdf10f60ec58b0/embed"></iframe>

            <div className="modelhead mb-5">
              <p> Cat </p>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12">
            <iframe sandbox="allow-scripts allow-same-origin allow-popups allow-forms" frameborder="0" width="100%" height="550" src="https://sketchfab.com/models/a8e7e10f005f4baab0a2f5079d759fcd/embed"></iframe>

            <div className="modelhead mb-5">
              <p> Elephant </p>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12">
            <iframe sandbox="allow-scripts allow-same-origin allow-popups allow-forms" frameborder="0" width="100%" height="550" src="https://sketchfab.com/models/a82ac74c73bf408fb25b9ee697048e9e/embed"></iframe>

            <div className="modelhead mb-5">
              <p> Tropical Plant </p>
            </div>
          </div>
          <div className="arhead my-5">
        <h1 className="text-center">AR Models</h1>
      </div>
      <div className="col-lg-5 col-md-5 col-sm-12">
            <iframe sandbox="allow-scripts allow-same-origin allow-popups allow-forms" frameborder="0" width="100%" height="550" src="https://console.echoar.xyz/webar?key=ancient-field-9556&entry=e5026fbf-de5d-43bb-bbcc-4a74784fd905"></iframe>
            <a href="https://go.echoar.xyz/rDCC" className="nolink">
            <div className="modelhead mb-5">
              <p> Sunflower - See in AR</p>
            </div>
            </a>
          </div>
      <div className="col-lg-5 col-md-5 col-sm-12">
            <iframe sandbox="allow-scripts allow-same-origin allow-popups allow-forms" frameborder="0" width="100%" height="550" src="https://console.echoar.xyz/webar?key=ancient-field-9556&entry=f1ee4ebf-34af-4ce9-a685-60ed59fda38d"></iframe>
            <a href="https://go.echoar.xyz/dR9K" className="nolink">
            
            <div className="modelhead mb-5">
              <p> Turtle - See in AR</p>
            </div>
            </a>

          </div>
      <div className="col-lg-5 col-md-5 col-sm-12">
            <iframe sandbox="allow-scripts allow-same-origin allow-popups allow-forms" frameborder="0" width="100%" height="550" src="https://console.echoar.xyz/webar?key=ancient-field-9556&entry=0edab886-bd39-4755-8393-0eb344c87e9e"></iframe>
            <a href="https://go.echoar.xyz/4aX2" className="nolink">
            
            <div className="modelhead mb-5">
              <p> Dolphin - See in AR </p>
            </div>
            </a>

          </div>
      <div className="col-lg-5 col-md-5 col-sm-12">
            <iframe sandbox="allow-scripts allow-same-origin allow-popups allow-forms" frameborder="0" width="100%" height="550" src="https://console.echoar.xyz/webar?key=ancient-field-9556&entry=b3526d99-b76a-40e1-9327-23ec29d93fac"></iframe>
            <a href="https://go.echoar.xyz/fGgF" className="nolink">
            
            <div className="modelhead mb-5">
              <p> Ferret - See in AR </p>
            </div>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ForestScreen;
