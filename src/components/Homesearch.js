import React from "react";
import homeimg from "../img/home-image.png";
import Container from "react-bootstrap/Container";
import "../App.css";

const Homesearch = () => {
  return (
    <div className="background comonBack">
      <Container fluid>
        <div className="row">
          <div className="col-md-6 col-12 pt-5">
            <h1>Start Learning With LearnUp Now</h1>
            <p>
              Study any topic, anytime. Choose from thousands of expert-led
              expelio terms courses now.
            </p>
            <div className="w-100 search-place d-flex">
              <input
                type="search"
                className="input-search search-input bg-light w-100"
                placeholder=""
              />
              <button className="input-search search-button bg-danger pl-3 pr-3">
                GO
              </button>
            </div>
          </div>
          <div className="col-md-6 col-12 pt-3">
            <img src={homeimg} className="home-img" alt="homeimage" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Homesearch;
