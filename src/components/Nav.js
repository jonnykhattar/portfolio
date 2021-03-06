import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
export class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">Home</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" exact to="/projects">Projects</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}