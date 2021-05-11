import React, { Component } from "react";

class TextBoxCCFetch extends Component {
  constructor(props) {
    super(props);
    console.log('Fetch ...');
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

    // Using fetch api
    fetch(`http://localhost/cc/PHPWS/Welcome.php?name=${this.state.fname}`)
      .then((res) => res.json())
      .then((data) => {
        const { message } = data;
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

export default TextBoxCCFetch;






