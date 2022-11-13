import React from "react";
import ReactDOM  from "react-dom";
import Clock from "./Clock";

export default function User(){
    return(
        <div className="App">
            <h2>
                {setInterval(tick, 1000)}
            </h2>
        </div>
    )
}

function tick(){
    
    ReactDOM.render(<Clock date={new Date()}/>,document.getElementById('root'));
}