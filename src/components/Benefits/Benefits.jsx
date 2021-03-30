import React from "react";
import "./Benefits.css";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import HotelIcon from "@material-ui/icons/Hotel";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function Benefits() {
  return (
    <div className='Benefits'>
      <h1 className='benefits__header'>What we'll bring you</h1>
      <div className='benefits__cards'>
        <div className='benefit__card'>
          <h1 className='benefit__heading'>Hotels</h1>
          <div className='benefit__desc'>
            <HotelIcon />
            <p>We'll find you the best, cheapest & most luxorious.</p>
          </div>
        </div>
        <div className='benefit__card'>
          <h1 className='benefit__heading'>Flights</h1>
          <div className='benefit__desc'>
            <FlightTakeoffIcon />
            <p>We'll find you the best, cheapest & most luxorious.</p>
          </div>
        </div>
        <div className='benefit__card'>
          <h1 className='benefit__heading'>Tourism</h1>
          <div className='benefit__desc'>
            <LocationOnIcon />
            <p>We'll find you the best, cheapest & most luxorious.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
