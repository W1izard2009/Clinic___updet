import React from "react";
import Story from "../story/story";
import About_slider from "../slider/slider";
import About from "../hero/about";
import Boglanish from "../bog'lanish/boglanish";
import Mutaxasislar from "../../Home/Mutaxasislar/Mutaxasislar";

function About__asosiy() {
  return (
    <div>
      <About />
      <Story />
      <About_slider />
      <Mutaxasislar />
      <Boglanish />
    </div>
  );
}

export default About__asosiy;
