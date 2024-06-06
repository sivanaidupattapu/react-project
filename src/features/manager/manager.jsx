import React from "react";
import { Outlet } from "react-router-dom";
function Manager(){
    return <div>
        <h2 style={{color:"orangered"}}>Hello Manager!</h2>
        <Outlet></Outlet>
    </div>
}
export default Manager  