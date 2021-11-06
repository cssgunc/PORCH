import React from 'react';
import "./NavStyles.css"
import Hamburger from "./Hamburger";

export default function NavContent() {
    return (
        <div className="navContent">
            <div id="hamBox">
                <div id="hamButton">
                    <Hamburger />
                </div>
                <ul id="hamNavList">
                    <li className="navItem hamNavItem"><a href="../Home" className="navItemLink">placeHolder1</a></li>
                    <li className="navItem hamNavItem"><a href="../Home" className="navItemLink">placeHolder2</a></li>
                    <li className="navItem hamNavItem"><a href="../Home" className="navItemLink">placeHolder3</a></li>
                    <li className="navItem hamNavItem"><a href="../Home" className="navItemLink">placeHolder4</a></li>
                </ul>
            </div>
        </div>

    )
}