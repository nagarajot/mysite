/*
     The concept of children of a component is demonstrated here.

     The App.js is modified as given below.

     function App() {
          return (
          <div>
                <WelcomeThreeFC name="John" age="23" >
                     <p>This is a child of component</p>
                 </WelcomeThreeFC>
                <WelcomeThreeFC name="Rita" age="43" >
                     <button>Submit</button>
                </Welcome>
                <WelcomeThreeFC name="Ann" age="54" />
           </div>
           );
     }

     The child element is applied to first and second component only.

     children is used when we do not know the name of the props.

*/



import React from 'react'

const WelcomeThreeFC = (props) => {
    return (
        <div>
            <h1>{props.name} - {props.age}</h1>
            {props.children}
        </div>
    )
}

export default WelcomeThreeFC





