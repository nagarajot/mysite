import React from 'react'

function ChildTwoFC(props) {
    return (
        <div>
            <button onClick={() => props.handler(23)}>Greet</button>
        </div>
    )
}

export default ChildTwoFC
