import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function HelpLayout() {
    return (
        <div className='help-layout'>
            <h2>Website Help</h2>
            <p>Befkadu Belete Frew </p>
            <nav>
                <NavLink to="faq">View the FAQ</NavLink>
                <NavLink to="Contact">Contact Us</NavLink>
            </nav>
            <Outlet />

        </div>
    )
}

export default HelpLayout
