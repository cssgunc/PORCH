import React from 'react';
import "./NavStyles.css"
import Hamburger from "./Hamburger";
import NavContent from "./NavContent"

export default function HamburgerMenu() {
    return (
        <div className="navContent">
            <div id="hamBox">
                <div id="hamButton">
                    <Hamburger />
                </div>
                    <ul id="hamNavList"> <NavContent /> </ul>
            </div>
        </div>

    )
}