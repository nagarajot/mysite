import React, { Component } from "react";

const INITIAL_STATE = {
  operand1: "",
  operand2: "",
  operator: "",
  result: "",
};

class CalculatorCC extends Component {
  
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
      result:
        `${this.state.operand1} ${this.state.operator} ${this.state.operand2}  = ` +
        this.operate(
          this.state.operand1,
          this.state.operand2,
          this.state.operator
        ),
    });
  };

  operate(a, b, op) {
    switch (op) {
      case "+":
        return parseInt(a) + parseInt(b);
      case "-":
        return parseInt(a) - parseInt(b);
      case "*":
        return parseInt(a) * parseInt(b);
      case "/":
        return parseInt(a) / parseInt(b);
      case '%':
        return parseInt(a) % parseInt(b);
        default:
            return
    }
  }

  render() {
    return (
      <div>
        <h1>CalculatorCC</h1>
        <form onSubmit={this.handleClick}>
          Operand 1
          <input type="text" name="operand1" onChange={this.handleChange} />
          <br />
          <br />
          Operand 2
          <input type="text" name="operand2" onChange={this.handleChange} />
          <br />
          <br />
          <input
            type="radio"
            name="operator"
            value="+"
            onChange={this.handleChange}
          />
          Add
          <input
            type="radio"
            name="operator"
            value="-"
            onChange={this.handleChange}
          />
          Subtract
          <input
            type="radio"
            name="operator"
            value="*"
            onChange={this.handleChange}
          />
          Multiply
          <input
            type="radio"
            name="operator"
            value="/"
            onChange={this.handleChange}
          />
          Divide
          <input
            type="radio"
            name="operator"
            value="%"
            onChange={this.handleChange}
          />
          Modulo
          <br />
          <br />
          <button onClick={this.handleClick}>Submit</button>
        </form>
        <br />
        {this.state.result}
      </div>
    );
  }
}

export default CalculatorCC
