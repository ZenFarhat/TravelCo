import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className='Hero'>
      <div className='hero__text'>
        <h1>Travel Beyond Limits.</h1>
        <h2>
          Start your journey with us. Got a place in mind? we'll get you there.
        </h2>
      </div>
      <a href='#contact'>
        <button className='hero__button'>Book Now</button>
      </a>
    </div>
  );
}

export default Hero;
