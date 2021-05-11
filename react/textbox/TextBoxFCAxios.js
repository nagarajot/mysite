import React, { useState } from "react";
import Axios from "axios";

function TextBoxFCAxios() {
  const [state, setState] = useState({ fname: "", result: "" });

  const handleChange = (event) => {
    event.preventDefault();
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log('Axios ...');
    // Using axios
    Axios.get(`http://localhost/cc/PHPWS/Welcome.php?name=${state.fname}`).then(
      (res) => {
        const { message } = res.data;
        setState({
          ...state,
          result: message,
        });
      }
    );

    // Using fetch api
    /*  
    fetch(`http://localhost/cc/PHPWS/Welcome.php?name=${state.fname}`)
      .then((res) => res.json())
      .then((data) => {
        const { text } = data;
        setState({
          ...state,
          result: text,
        });
      });
      */
  };

  const { fname, result } = state;

  return (
    <div>
      <form onSubmit={handleClick}>
        Name:
        <input type="text" value={fname} name="fname" onChange={handleChange} />
        <br />
        <input type="submit" value="Submit" />
        <br />
      </form>
      {result}
    </div>
  );
}

export default TextBoxFCAxios;


