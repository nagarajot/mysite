import React, { Component } from "react"

const INITIAL_STATE = {
  current: 0,
};

class IncDecCC extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  handleIncrement = () => {
    this.setState({
      ...this.state,
      current: parseInt(this.state.current) + 1,
    });
  };

  handleDecrement = () => {
    this.setState({
      ...this.state,
      current: parseInt(this.state.current) - 1,
    });
  };

  handleChange = (event) => {
    this.state({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <input
          type="number"
          name="current"
          value={this.state.current}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <button onClick={this.handleIncrement}>Increment</button>
         &nbsp;&nbsp;&nbsp;
        <button onClick={this.handleDecrement}>Decrement</button>
        <br />
        <br />
      </div>
    );
  }
}

export default IncDecCC



