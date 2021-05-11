import React, { Component } from "react"

const INITIAL_STATE = {
  operand1: "",
  operand2: "",
  result: "",
}

class AddCC extends Component {
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

    const sum = parseInt(this.state.operand1) + parseInt(this.state.operand2);
    this.setState({
      ...this.state,
      result: "Sum: " + sum,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleClick}>
          <input
            type="text"
            placeholder="Operand 1"
            name="operand1"
            value={this.state.operand1}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Operand 2"
            name="operand2"
            value={this.state.opoerand2}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <button onClick={this.handleClick}>Submit</button>
          <br />
          <br />
        </form>
        {this.state.result}
      </div>
    );
  }
}

export default AddCC




