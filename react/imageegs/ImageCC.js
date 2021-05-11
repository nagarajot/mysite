import React, { Component } from "react";

import golgumbaz from "./images/GolGumbaz.jpg"
import mysorepalace from "./images/MysorePalace.jpg"
import tajmahal from "./images/TajMahal.jpg"
import vidhanasoudha from "./images/VidhanaSoudha.jpg"
import indiagate from "./images/IndiaGate.jpg"
import gatewayofindia from "./images/GateWayOfIndia.jpg"




const INITIAL_STATE = {
  monument: mysorepalace,
  result: "",
};

class ImageCC extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      ...this.state,
      result: this.state.monument,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleClick}>
          Monument:
          <select name="monument" onChange={this.handleChange}>
            <option value={mysorepalace}>Mysore Palace</option>
            <option value={vidhanasoudha}>Vidhana Soudha</option>
            <option value={golgumbaz}>Gol Gumbaz</option>
            <option value={tajmahal}>Taj Mahal</option>
          </select>
          <br />
          <br />
          <input type="submit" value="Submit" />
          <br />
          <br />
          <br />
        </form>
        <div className="imaze">
          {this.state.result === "" ? (
            ""
          ) : (
            <img src={this.state.result} alt="selectedone" />
          )}
        </div>
      </div>
    );
  }
}

export default ImageCC


