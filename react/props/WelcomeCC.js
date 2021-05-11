/*
    function App() {
       return (
          <div>
             <WelcomeCC />
             <WelcomeCC />
             <WelcomeCC />
          </div>
       );
    }

    In App.js, the component may be reused, by calling
    n no of times.

    But it is not dynamic.
    If we want to make the component dynamic,
    we need to pass props.


*/



import React, { Component } from 'react'

class WelcomeCC extends Component
{
    render() {
        return (
        <div>
            <h1>Welcome John</h1>
        </div>
        )
    }
}

export default WelcomeCC

