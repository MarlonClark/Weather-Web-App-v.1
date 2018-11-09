import React from "react";

const Form = props => (
  <form onSubmit={props.getWeather}>
    <div className="form-group row">
      {/* City input */}
      <div className="col-sm-6 col-md-4">
        <label className="sr-only" for="city">
          City
        </label>
        <input
          className="form-control my-2"
          type="text"
          name="city"
          placeholder="City: Denver, London..."
        />
      </div>
      {/* Country input */}
      <div className="col-sm-6 col-md-4">
        <label className="sr-only" for="country">
          Country
        </label>
        <input
          className="form-control my-2"
          type="test"
          name="country"
          placeholder="Country: US, UK..."
        />
      </div>
      {/* Submit button */}
      <div className="col-sm-12 col-md-4">
        <button className="my-2 btn btn-primary">Get Weather</button>
      </div>
    </div>
  </form>
);

export default Form;
