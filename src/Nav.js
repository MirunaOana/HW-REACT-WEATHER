import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Nav() {

    return (

        <nav className="navbar navbar-expand navbar-dark bg-dark">

            <Link className="navbar-brand" to="/">Games App</Link>
            

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="navbar-nav w-100">

                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/games">Games</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/weather">Weather</NavLink>
                    </li>

                </ul>

            </div>

        </nav>

    );
}