import React, { useState } from "react";
import Axios from "axios";

const INITIAL_STATE = {
  operand1: "",
  operand2: "",
  result: "",
};

function AddFCAxios() {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    Axios.get(
      `http://localhost/cc/PHP WS/Add.php?operand1=${state.operand1}&operand2=${state.operand2}`
    ).then((res) => {
      const { result } = res.data;

      setState({
        ...state,
        result: result,
      });
    });

    // Using fetch API
    /*
    fetch(
      `http://localhost/add-demo.php?op1=${state.operand1}&op2=${state.operand2}`
    )
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

  console.log(state);
  return (
    <div>
        <h1>AddFCAxios</h1>
      <form onSubmit={handleClick}>
        <input
          type="text"
          placeholder="Operand 1"
          name="operand1"
          value={state.operand1}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Operand 2"
          name="operand2"
          value={state.opoerand2}
          onChange={handleChange}
        />
        <br />
        <br />
        <button onClick={handleClick}>Submit</button>
        <br />
        <br />
      </form>
      {state.result}
    </div>
  );
}

export default AddFCAxios


