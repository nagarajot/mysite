import React from 'react'

function ChildOneFC(props) {
    return (
        <div>
            <button onClick={props.handler}>Greet</button>
        </div>
    )
}

export default ChildOneFC
