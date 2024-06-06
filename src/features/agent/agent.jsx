import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
function Agent(){
    var navigate =useNavigate();
    function addloan(){
        navigate("/agent/addloan")
    }
    return <div>
         <div className="d-flex justify-content-between p-2">
        <h2 style={{color:'orangered'}}><span style={{color:'purple'}} >A</span>gent dashboard</h2>
        <div><button onClick={()=>{addloan()}} className="btn btn-success m-1">+Add Loan</button></div>
    </div>
    <Outlet></Outlet>
    </div>
}
export default Agent