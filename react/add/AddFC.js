import React, { useState } from "react"

const INITIAL_STATE = {
  operand1: "",
  operand2: "",
  result: "",
}

function AddFC() {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    const sum = parseInt(state.operand1) + parseInt(state.operand2);
    setState({
      ...state,
      result: "Sum: " + sum,
    });
  };

  console.log(state);
  return (
    <div>
      <h1>AddFC</h1>  
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

export default AddFC


