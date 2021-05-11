import React, { useState } from "react";
import Axios from "axios";

function RadioButtonFCAxios() {
  const [state, setState] = useState({
    gender: "",
    result: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Axios
    Axios.get(`http://localhost/cc/PHP WS/Gender.php?gender=${state.gender}`)
    .then((res) => {
        const { message } = res.data;
        setState({
          ...state,
          result: message,
        });
      }
    );

    //fetch API
      /*
    fetch(`http://localhost/radio-demo.php?gender=${state.gender}`)
      .then((res) => res.json())
      .then((data) => {
        const { result } = data;
        setState({
          ...state,
          result: result,
        });
      });
      */
  };

  const handleChange = (event) => {
    setState({
      ...state,
      gender: event.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="radio"
          name="gender"
          value="M"
          checked={state.gender === "M"}
          onChange={handleChange}
        />
        Male
        <br />
        <input
          type="radio"
          name="gender"
          value="F"
          checked={state.gender === "F"}
          onChange={handleChange}
        />
        Female
        <br />
        <input type="submit" value="Submit" />
      </form>
      {state.result}
    </div>
  );
}

export default RadioButtonFCAxios