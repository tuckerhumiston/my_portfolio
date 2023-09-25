import React from "react";
import { Link } from "react-router-dom";
import '../styles/components/Nav.css';

function Nav() {
    const currentPath = window.location.pathname; // Get the current path

    return (
        <div className="Nav">
            <Link to='/' className={currentPath === '/' ? 'active' : ''}>Home</Link>
            <Link to='/skills' className={currentPath === '/skills' ? 'active' : ''}>Skills</Link>
            <Link to='/about' className={currentPath === '/about' ? 'active' : ''}>About</Link>
            <Link to='/contact' className={currentPath === '/contact' ? 'active' : ''}>Contact</Link>
        </div>
    )
}

export default Nav;