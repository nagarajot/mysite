import React, { Component } from "react";
import Axios from "axios";

class TextBoxCCAxios extends Component {
  constructor(props) {
    super(props);
    console.log('Axios ...');
    this.state = {
      fname: "",
      result: "",
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // Using axios
    Axios.get(
      `http://localhost/cc/PHPWS/Welcome.php?name=${this.state.fname}`
    ).then((res) => {
      const { message } = res.data;
      this.setState({
        ...this.state,
        result: message,
      });
    });

  };

  render() {
    const { fname, result } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Name:
          <input
            type="text"
            name="fname"
            value={fname}
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="submit" />
          <br />
        </form>
        {result}
      </div>
    );
  }
}

export default TextBoxCCAxios;






