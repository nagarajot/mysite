import React from 'react'

function MulTableFC(props) {

    const multiple = () => {

        let entries = [];
        for(let i=1; i<=10; i++){
          entries.push(<p key={i}>{props.no} x {i} = {props.no*i}</p>)
        }
    
        return entries
    }

    return (
        <div>
            {multiple()}
        </div>
    )
}

export default MulTableFC



