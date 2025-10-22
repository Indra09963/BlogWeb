import React from "react";
import { Link } from "react-router-dom";


function Navbar(id){
    return(
        <>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li style={{ marginLeft: 30, marginRight: 50 }} className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li style={{ marginLeft: 30, marginRight: 50 }} className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/CategoryBlogs">CategoryBlogs</Link>
                        </li>
                        <li style={{ marginLeft: 30, marginRight: 50 }} className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/DedicatedBlogs">Dedicated Blogs</Link>
                        </li>
                        <li style={{ marginLeft: 30, marginRight: 50 }} className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/Login">Login</Link>
                        </li>
                        <li style={{ marginLeft: 30, marginRight: 50 }} className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/Register">Register</Link>
                        </li>
                    </ul>
                    </div>

                </div>
</nav>
        </>
    )
}
export default Navbar;