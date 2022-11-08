import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";


function NavBar() {
    return (
        <div className='NavBarContainer'>
            <div className='NavBarOptionContainer'>
                <NavLink to="home" className={({ isActive }) => isActive ? 'ButtonAffter':'Button' }>Home</NavLink>
                <NavLink to="aboutus" className={({ isActive }) => isActive ? 'ButtonAffter':'Button'}>About Us</NavLink>
                <NavLink to="contactus" className={({ isActive }) => isActive ? 'ButtonAffter':'Button'}>Contact Us</NavLink>
                <Link to="/" className="Button">  Restart</Link>
            </div>


            <div className='UserDetails'>Admin <FontAwesomeIcon icon={faUser} /></div>
            <div className='WelcomSide'>Welcome to CDN Project</div>
        </div>
    )
}

export default NavBar