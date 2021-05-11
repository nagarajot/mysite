import React, { Component, useState } from "react";

import golgumbaz from "./images/GolGumbaz.jpg";
import mysorepalace from "./images/MysorePalace.jpg";
import tajmahal from "./images/TajMahal.jpg";
import vidhanasoudha from "./images/VidhanaSoudha.jpg";

const INITIAL_STATE = {
  monument: mysorepalace,
  result: "",
};

function ImageFC() {
  const [state, setState] = useState(INITIAL_STATE);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    setState({
      ...state,
      result: state.monument,
    });
  };
  console.log(state);
  return (
    <div>
        <h1>ImageFC</h1>
      <form onSubmit={handleClick}>
        Monument:
        <select name="monument" onChange={handleChange}>
          <option value={mysorepalace}>Mysore Palace</option>
          <option value={vidhanasoudha}>Vidhana Soudha</option>
          <option value={golgumbaz}>Gol Gumbaz</option>
          <option value={tajmahal}>Taj Mahal</option>
        </select>
        <br />
        <br />
        <input type="submit" value="submit" />
        <br />
        <br />
      </form>
      <div>
        {state.result === "" ? (
          ""
        ) : (
          <img src={state.result} alt="selectedone" />
        )}
      </div>
    </div>
  );
}

export default ImageFC



