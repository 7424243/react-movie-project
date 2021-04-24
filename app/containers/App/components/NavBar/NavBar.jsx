import React from 'react'
import {NavLink} from 'react-router-dom'

export default function NavBar() {
    return (
        <nav>
            <NavLink to="/" className="navlink">Reviews</NavLink>
            <NavLink to="/critics" className="navlink">Critics</NavLink>
        </nav>
    )
}