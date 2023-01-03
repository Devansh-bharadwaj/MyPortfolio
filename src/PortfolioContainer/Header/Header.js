import React from 'react';
import "./Header.css";
import { NavLink } from "react-router-dom";


export default function Header() {
    return (
        <div>
            <div className="nav">
                <NavLink to="/MyPortfolio" className="subnav">Home</NavLink>
                <NavLink to="/skills" className="subnav">Skills</NavLink>
                <NavLink to="/projects" className="subnav">Projects</NavLink>
                <NavLink to="contact" className="subnav">Contact</NavLink>
            </div>
        </div>
    );
}
