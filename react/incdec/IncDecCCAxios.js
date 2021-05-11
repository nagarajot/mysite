import React, { Component } from "react";
import Axios from "axios";

const INITIAL_STATE = {
  current: 0,
};

class IncDecCCAxios extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  handleIncrement = () => {
    const data = { val: this.state.current, mode: "INC" };

    Axios.post(`http://localhost/cc/PHP WS/IncrementDecrement.php`, data).then(
      (res) => {
        const { result } = res.data;

        this.setState({
          current: result,
        });
      }
    );

    // Using fetch API
    /*
    fetch(`http://localhost/increment-decrement-demo.php`, {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        const { result } = data;

        this.setState({
          current: result,
        });
      });
      */
  };

  handleDecrement = () => {
    const data = { val: this.state.current, mode: "DEC" };

    Axios.post(`http://localhost/cc/PHP WS/IncrementDecrement.php`, data).then(
      (res) => {
        const { result } = res.data;

        this.setState({
          current: result,
        });
      }
    );

    fetch(`http://localhost/increment-decrement-demo.php`, {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        const { result } = data;

        this.setState({
          current: result,
        });
      });
  };

  handleChange(event) {
    this.state({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div>
          <h1>IncDecCCAxios</h1>
        <input
          type="number"
          name="current"
          value={this.state.current}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <button onClick={this.handleIncrement}>Increment</button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={this.handleDecrement}>Decrement</button>
        <br />
        <br />
      </div>
    );
  }
}

export default IncDecCCAxios





