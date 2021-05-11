import React, { Component } from "react";

class SelectCCArrow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      qualification: "",
      result: "",
    };
  }

  handleChange=(event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      ...this.state,
      result: this.state.qualification + ' Selected',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Qualification:
          <select
            name="qualification"
            onChange={this.handleChange}
            value={this.state.qualification}
          >
            <option value="BE-CS">BE-CS</option>
            <option value="BE-ME">BE-ME</option>
            <option value="BSc">BSc</option>
            <option value="BCom">BCom</option>
          </select>
          <br />
          <button name="submit">Submit</button>
        </form>
        <br />
        {this.state.result}
      </div>
    );
  }
}

export default SelectCCArrow