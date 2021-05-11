// <MulTable n="7" />

import React, { Component } from 'react'

class MulTableCC extends Component{

    constructor(props) {
        super(props);

        this.multiple = this.multiple.bind(this);
        this.state = {
            props: props
        }
    }

    multiple () {

        let entries = [];
        for(let i=1; i<=10; i++){
          entries.push(<p key={i}>{this.state.props.no} x {i} = {this.state.props.no*i}</p>)
        }
    
        return entries
    }
    
    render() {
        console.log(this.state)

        return (
            <div>
                {this.multiple()}
            </div>
        );
    }

}

export default MulTableCC




