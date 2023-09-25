import React from "react";
import { Link, useLocation } from "react-router-dom";
import '../styles/components/Nav.css';

function Nav() {
    const location = useLocation(); // Get the current location object

    return (
        <div className="Nav">
            <Link to='/' className={location.pathname === '/' ? 'active' : ''}>Home</Link>
            <Link to='/skills' className={location.pathname === '/skills' ? 'active' : ''}>Skills</Link>
            <Link to='/about' className={location.pathname === '/about' ? 'active' : ''}>About</Link>
            <Link to='/contact' className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
        </div>
    )
}

export default Nav;
