import React, { Component } from "react";
import Axios from 'axios'

const INITIAL_STATE = {
  number: "",
  result: "",
};

class WordCCAxios extends Component {
  constructor(props) {
    super(props);
    console.log('Axios ...');

    this.state = { ...INITIAL_STATE };
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
    // Axios
    Axios.get(
      `http://localhost/cc/PHP WS/Word.php?n=${this.state.number}`
    ).then((res) => {
      const { message } = res.data;
      this.setState({
        ...this.state,
        result: message,
      });
    });

    //fetch api
    /*
    fetch(`http://localhost/number-demo.php?number=${this.state.number}`)
      .then((res) => res.json())
      .then((data) => {
        const { result } = data;
        this.setState({
          ...this.state,
          submit: result,
        });
      });
      */
    };

  render() {
    const { number, result } = this.state;
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="number"
            type="number"
            value={number}
            min="0"
            max="10"
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="Submit" />
          <br />
          {result}
        </form>
      </div>
    );
  }
}

export default WordCCAxios

