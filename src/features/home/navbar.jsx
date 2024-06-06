import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateLogin,logout } from "../login/loginslice";
function Nav() {
    var { user } = useSelector(state => state.loginReducer)
    console.log(user);
    var dispatch = useDispatch()
    // function logout() {
    //     window.localStorage.removeItem('token')
    //     dispatch(updateLogin(false))
    // }
    return <div id='nav'>
        <nav class="navbar navbar-expand-lg bg-body-tertiary mx-2">
            <div class="container-fluid">
                <Link class="navbar-brand m-1" to="/#"><b style={{color:"purple"}}>L M S</b></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item m-1">
                            <Link class="nav-link active" aria-current="page" to={`/${user?.role}`}>MyDashboard</Link>
                        </li>
                        <li class="nav-item m-1">
                            <Link class="nav-link active" aria-current="page" to="/posts">Posts</Link>
                        </li>
                        <li class="nav-item m-1">
                            <Link class="nav-link active" aria-current="page" to="/products">Products</Link>
                        </li>
                        <li class="nav-item m-1">
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </li>
                        <li class="nav-item m-1">
                            <button onClick={() => { dispatch(logout()) }} className="btn btn-danger btn-sm m-1">Logout</button>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </div>
}
export default Nav