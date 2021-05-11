import React, { useState } from "react";
import Axios from "axios";

const INITIAL_STATE = {
  operand1: "",
  operand2: "",
  operator: "",
  result: "",
};

function CalculatorFCAxios() {

    const [state, setState] = useState({ ...INITIAL_STATE });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = (event) => {
    event.preventDefault();

    Axios.get(`http://localhost/cc/PHP WS/Calculator.php?
    operand1=${state.operand1}&operand2=${state.operand2}&operator=${state.operator}`)
    .then((res) => {
      const { result } = res.data;

      setState({
        ...state,
        result,
      });
    });

    // Using fetch API
    /*
    fetch(`http://localhost/calculator-demo.php`, {
      method: "POST",
      body: JSON.stringify({
        op1: state.operand1,
        op2: state.operand2,
        op: state.operator,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const { result } = data;

        setState({
          ...state,
          result,
        });
      });
      */
  };

  
  console.log(state);

  return (
    <div>
       <h1>CalculatorFCAxios</h1> 
      <form onSubmit={handleClick}>
        Operand 1
        <input type="text" name="operand1" onChange={handleChange} />
        <br />
        Operand 2
        <input type="text" name="operand2" onChange={handleChange} />
        <br />
        <input type="radio" name="operator" value="+" onChange={handleChange} />
        Add
        <input type="radio" name="operator" value="-" onChange={handleChange} />
        Subtract
        <input type="radio" name="operator" value="*" onChange={handleChange} />
        Multiply
        <input type="radio" name="operator" value="/" onChange={handleChange} />
        Divide
        <input type="radio" name="operator" value="%" onChange={handleChange} />
        Modulo
        <br />
        <input type="submit" value="submit" />
      </form>
      {state.result}
    </div>
  );
}

export default CalculatorFCAxios


