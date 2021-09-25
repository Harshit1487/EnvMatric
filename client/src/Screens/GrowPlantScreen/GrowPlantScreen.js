import React, { useState } from "react";
import img1 from "./1.jpeg";
import img2 from "./2.jpeg";
import img3 from "./3.jpeg";
import img4 from "./4.jpeg";
import img5 from "./5.jpeg";
import img6 from "./6.jpeg";
import img7 from "./7.jpeg";
import img8 from "./8.jpeg";
import img9 from "./9.jpeg";
import "./GrowPlantScreen.css";
import { ListGroup } from "react-bootstrap";
const GrowPlantScreen = () => {
  const [points, setPoints] = useState(0);
  const renderplant = () => {
    switch (points) {
      case -5:
        return <img src={img1} />;
      case -4:
        return <img src={img1} />;
      case -3:
        return <img src={img1} />;
      case -2:
        return <img src={img1} />;
      case -1:
        return <img src={img1} />;
      case 0:
        return <img src={img1} />;
      case 1:
        return <img src={img2} />;
      case 2:
        return <img src={img3} />;
      case 3:
        return <img src={img4} />;
      case 4:
        return <img src={img5} />;
      case 5:
        return <img src={img6} />;
      case 6:
        return <img src={img7} />;
      case 7:
        return <img src={img8} />;
      case 8:
        return <img src={img9} />;
      default:
        return <img src={img9} />;
    }
  };
  return (
    <div className="container my-3 growp">
      <h2 className="my-4 growpss">Grow your Plant</h2>
      <h3> Your Points: {points}</h3>
      <div className="flex-row mx-5 w-90 my-5">
        <div className="row">
          <div className="plantimage col-lg-4 col-sm-12">{renderplant()}</div>

          <div className="Activities col-lg-8 col-sm-12">
            <h4>Your Activities Today</h4>

            <div className="d-flex flex-row my-5">
              <ListGroup>
                <ListGroup.Item
                  variant="primary"
                  onClick={() => setPoints(points + 1)}
                >
                  I Planted a Tree Today
                </ListGroup.Item>
                <ListGroup.Item
                  variant="secondary"
                  onClick={() => setPoints(points + 1)}
                >
                  I put waste in Dustbin/right place
                </ListGroup.Item>
                <ListGroup.Item
                  variant="success"
                  onClick={() => setPoints(points + 1)}
                >
                  Used a Jute bag instead of plastic.
                </ListGroup.Item>
                <ListGroup.Item
                  variant="info"
                  onClick={() => setPoints(points + 1)}
                >
                  I tried my best not to waste water today
                </ListGroup.Item>
              </ListGroup>

              <ListGroup>
                <ListGroup.Item
                  variant="danger"
                  onClick={() => setPoints(points - 1)}
                >
                  I left tap running
                </ListGroup.Item>
                <ListGroup.Item
                  variant="warning"
                  onClick={() => setPoints(points - 1)}
                >
                  I forgot to switch off an Electric appliance
                </ListGroup.Item>
                <ListGroup.Item
                  variant="light"
                  onClick={() => setPoints(points - 1)}
                >
                  I did not put waste in its correct place
                </ListGroup.Item>
                <ListGroup.Item
                  variant="dark"
                  onClick={() => setPoints(points - 1)}
                >
                  I took car to work where I could have used a bus
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowPlantScreen;
