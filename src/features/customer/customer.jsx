import React from "react";
import { Outlet } from "react-router-dom";
function Customer(){
    return <div>
        <h2>Customer Dashboard</h2>
        <Outlet></Outlet>
    </div>
}
export default Customer