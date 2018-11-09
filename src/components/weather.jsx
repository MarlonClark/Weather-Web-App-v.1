import React from "react";

const Weather = props => (
  <div>
    {/* Render only on correct submission */}
    {props.city && props.country && (
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">
            {props.city}, {props.country}
          </h4>
          <p className="temp-area">
            <img
              id="condition-img"
              src={props.icon}
              width="50"
              height="50"
              alt="A small weather icon"
            />
            <span id="temp">{props.temperature}</span>
            &#xb0;F
          </p>
          <p className="card-subtitle">Humidity: {props.humidity}%</p>,
          <p className="card-subtitle">Condition: {props.description} </p>
        </div>
      </div>
    )}
    {/* Error message */}
    {props.error && (
      <div className="alert alert-danger" role="alert">
        {props.error}
      </div>
    )}
  </div>
);

export default Weather;
