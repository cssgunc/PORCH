import React from 'react';
import "./NavStyles.css"


export default function NavContent() {
    return (
        <div>
                <li className="navItem" ><a href="../Home" className="navItemLink">Our Communities</a></li>
                <li className="navItem"><a href="../Home" className="navItemLink">Our Story</a></li>
                <li className="navItem"><a href="../Home" className="navItemLink">Get Involved!</a></li>
                <li className="navItem"><a href="../Home" className="navItemLink">Contact Us</a></li>
                <li className="navItem"><a href="../Home" className="navItemLink">Login</a></li>
        </div>
    )
}