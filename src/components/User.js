import React from "react";
import ReactDOM  from "react-dom";
//const name = "User Functional Component"

//functional react component

function User(){
    return(
        <div className="App">
            <h2>
                {setInterval(tick, 1000)}
            </h2>
        </div>
    )
}
export default User;

function tick(){
    const element = (
        <h2>It is {new Date().toDateString()}</h2>
    )
    ReactDOM.render(element,document.getElementById('root'))
}