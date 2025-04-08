import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/">Elder Team</Link>
            <Link to="/deacons">Deacons</Link>
            <Link to="/ministry-staff">Ministry Staff Team</Link>
            <Link to="/mc-leaders">MC Leaders</Link>
            <Link to="/dnag-leaders">Dnag Leaders</Link>
            <Link to="/community-groups">Community Group Leaders</Link>
        </nav>
    );
}

export default Navbar;
