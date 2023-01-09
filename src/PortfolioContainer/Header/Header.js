import React, { useState, useEffect } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import img1 from './moon.png';
import img2 from './moon (1).png';

export default function Header() {

    const [theme, setTheme] = useState("light-theme")
    const [themeText, setThemeText] = useState("Dark mode");
    const [iconColor, setIconColor] = useState("white");
    const [img, setImg] = useState(img1);

    const toggleTheme = () => {
        if(theme == 'dark-theme') {
            setTheme('light-theme')
            setThemeText('Dark mode')
            setIconColor('white')
            setImg(img1)
        }else{
            setTheme('dark-theme')
            setThemeText('Light mode')
            setIconColor('#B3541E')
            setImg(img2)
        }
    }

    useEffect(() => {
        document.body.className = theme
    }, [theme])

  return (
    <div>
      <div className="nav">
        <NavLink to="/MyPortfolio" className="subnav">
          Home
        </NavLink>
        <NavLink to="/skills" className="subnav">
          Skills
        </NavLink>
        <NavLink to="/projects" className="subnav">
          Projects
        </NavLink>
        <NavLink to="contact" className="subnav">
          Contact
        </NavLink>
        {/* <div className="form-check form-switch">
          <input
            className="form-check-input light-mode-switch"
            type="checkbox"
            id="flexSwitchCheckDefault"
            style={{backgroundColor: iconColor}}
            onClick={toggleTheme}
          />
          <label className="form-check-label light-mode" htmlFor="flexSwitchCheckDefault">
            {themeText}
          </label>
        </div> */}
        <div style={{width: '37px',cursor:'pointer'}}>
        <img style={{width: '30px', boxShadow:'var(--img-box-shadow)'}} src={img} alt="mode" onClick={toggleTheme} />
        </div>
      </div>
    </div>
  );
}
