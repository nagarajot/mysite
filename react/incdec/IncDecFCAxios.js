import React, { useState } from "react";
import Axios from "axios";

const INITIAL_STATE = {
  current: 0,
};

function IncDecFCAxios() {
  const [state, setState] = useState(INITIAL_STATE);

  const handleIncrement = () => {
    const data = { val: state.current, mode: "INC" };

    Axios.post(`http://localhost/cc/PHP WS/IncrementDecrement.php`, data)
      .then((res) => {
        const { result } = res.data;

        setState({
          current: result,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleDecrement = () => {
    const data = { val: state.current, mode: "DEC" };

    Axios.post(`http://localhost/cc/PHP WS/IncrementDecrement.php`, data).then(
      (res) => {
        const { result } = res.data;

        setState({
          current: result,
        });
      }
    );

    // Using fetch API
    /*
    fetch(`http://localhost/increment-decrement-demo.php`, {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        const { result } = data;

        setState({
          current: result,
        });
      });
      */
  };

  return (
    <div>
        <h1>IncDecFCAxios</h1>
      <input
        type="number"
        name="current"
        value={state.current}
        onChange={handleChange}
      />
      <br />
      <br />
      <button onClick={handleIncrement}>Increment</button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={handleDecrement}>Decrement</button>
      <br />
    </div>
  );
}

export default IncDecFCAxios



