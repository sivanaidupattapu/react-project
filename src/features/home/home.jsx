import React, { useEffect } from "react";
import Nav from './navbar'
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Homepage() {
    var { user } = useSelector(state => state.loginReducer)
    var navigate = useNavigate();
    useEffect(() => {
        navigate(`/${user.role}`)
    }, [user])
    return <div>
        <Nav></Nav>
        <Outlet></Outlet>
    </div>
}
export default Homepage