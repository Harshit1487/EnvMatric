import React, { useEffect, useState } from "react";
import axios from "axios";
import { LinkContainer } from "react-router-bootstrap";
import { Card, Button } from "react-bootstrap";
import "./CSS/Wallscreens.css";

const WallScreen = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/walldata");
        setData(res.data);
      } catch (err) {
        const msg = err.response ? err.response.data.message : err;
        console.log(msg);
      }
    };
    fetchData();
  });
  const [data, setData] = useState([]);
  return (
    <div className="container ">
      <h2 className="container appreaciate text-center my-5">
        Wall Of Appreciation
      </h2>
      {data !== null ? (
        data.map((post) => {
          return (
            <>
              {/* <Card className="w-50 d-block mx-auto">
                    <Card.Body>
                    <Card.Title>{post.name}</Card.Title>
                    <Card.Text>
                    {post.description}
                    </Card.Text>
                    <Card.Text>{post.date}</Card.Text>
                    <LinkContainer to={`/images/${post._id}`}><Button variant="primary">See Image</Button></LinkContainer>
                    <Card.Text>{post.upVotes}</Card.Text>
                    </Card.Body>
                    </Card> */}

              <LinkContainer to={`/images/${post._id}`}>
                <div className="container my-5 wallbox ">
                  <div className="row">
                    <div className="col-sm-12 postname">
                      <p>{post.name}</p>
                    </div>
                    <div className="col-sm-12 postdate">
                      <p>
                        Posted On <span className="spanpost">{post.date}</span>
                      </p>
                    </div>

                    <div className="col-sm-12 postdesc">
                      <p>{post.description}</p>
                    </div>

                    <div className="upvotes my-3">
                      <p>Upvote By &nbsp; <span>{post.upVotes}</span></p>
                    </div>

                    <div className=" container text-center">
                      <p className="buttonwall">Click To watch the Image !!!!</p>
                    </div>
                  </div>
                </div>
              </LinkContainer>
            </>
          );
        })
      ) : (
        <h3>Loading</h3>
      )}
    </div>
  );
};

export default WallScreen;
