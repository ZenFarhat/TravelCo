import React from "react";
import "./About.css";
import airplaneImg from "../../media/airplane.png";

function About() {
  return (
    <div className='About'>
      <img src={airplaneImg} alt='' className='airplane' />
      <img src={airplaneImg} alt='' className='airplane airplane2' />
      <div className='about__text'>
        <h1>We'll take you anywhere, any time.</h1>
        <h2>With the best prices.</h2>
      </div>
    </div>
  );
}

export default About;
