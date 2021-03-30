import React from "react";
import "./Benefits.css";

function Benefits() {
  return (
    <div className='Benefits'>
      <h1 className='benefits__header'>What we'll bring you</h1>
      <div className='benefits__cards'>
        <div className='benefit__card'>
          <h1 className='benefit__heading'>Hotels</h1>
          <p className='benefit__desc'>We'll find you the best.</p>
        </div>
        <div className='benefit__card'>
          <h1 className='benefit__heading'>Flights</h1>
          <p className='benefit__desc'>The cheapest & most reliable.</p>
        </div>
        <div className='benefit__card'>
          <h1 className='benefit__heading'>Tourism</h1>
          <p className='benefit__desc'>
            Need a hand getting around? We've got plenty.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
