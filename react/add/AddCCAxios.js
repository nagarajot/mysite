import React, { Component } from "react"
import Axios from "axios"

const INITIAL_STATE = {
  operand1: "",
  operand2: "",
  result: "",
}

class AddCCAxios extends Component {
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

    Axios.get(
      `http://localhost/cc/PHP WS/Add.php?operand1=${this.state.operand1}&operand2=${this.state.operand2}`
    ).then((res) => {
      const { result } = res.data;

      this.setState({
        ...this.state,
        result: result,
      });
    });

    // Using Fetch API
    /*
    fetch(
      `http://localhost/add-demo.php?op1=${this.state.operand1}&op2=${this.state.operand2}`
    )
      .then((res) => res.json())
      .then((data) => {
        const { result } = data;
        this.setState({
          ...this.state,
          result: result,
        });
      });

      */
  };

  render() {
    return (
      <div>
          <h1>AddCCAxios</h1>
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

export default AddCCAxios


