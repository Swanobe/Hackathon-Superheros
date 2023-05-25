import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
const styles = ({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none'});

export default function Header () {
    return (
        <main>
            <header>
                <nav>
                    <NavLink to="/" style={styles}>Home</NavLink>
                    <NavLink to="/profiles" style={styles}>All Profiles</NavLink>
                    <NavLink to="/profile" style={styles}>Find a match</NavLink>
                    <NavLink to="/search" style={styles}>Search heros</NavLink>
                </nav>
            </header>
            <Outlet />
        </main>
    )
};
