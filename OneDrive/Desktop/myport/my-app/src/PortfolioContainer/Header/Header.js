import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";


export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{justifyContent:"center"}}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{fontSize:"20px"}}>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/skills">Skills</Link>
                            </li>
                            <li className="nav-item" style={{cursor:"pointer"}}>
                                <Link className="nav-link" to="/project">Project</Link>
                            </li>
                            <li className="nav-item" style={{cursor:"pointer"}}>
                                <Link className="nav-link" to="/contact">Contact me</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
