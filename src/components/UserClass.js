import React, {Component} from "react";

class UserClass extends Component{
    render(){
        return(
        <div className="App">
            <h2>This is{this.props.name}</h2>
        
        </div>
        )
    }
}

export default UserClass;