import React from "react";
import "./slider.css";
import slidrbg from "./img/slider.png";
import left from "./img/div.png";
import right from "./img/Frame.png";
function About_slider() {
  return (
    <div className="Slider">
      <div className="container">
        <div className="Slider__center">
          <button className="left_button">
            <img src={left} alt="" />
          </button>
          <button className="right_button">
            <img src={right} alt="" />
          </button>
          <img src={slidrbg} alt="" style={{ maxWidth: "1160px" }} />
        </div>
      </div>
    </div>
  );
}

export default About_slider;
