import React from "react";
import ReactDOM  from "react-dom";

//importing component

import User from "./components/User";
//import UserClass from "./components/UserClass";

//render

ReactDOM.render(
<React.StrictMode>
<User />
{/* <UserClass name = "MERN STACK"/> */}
</React.StrictMode>,
document.getElementById("root")
);