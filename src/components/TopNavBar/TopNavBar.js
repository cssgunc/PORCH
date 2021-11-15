import React, {useState} from 'react';
import logo from "../../assets/img.png";
import "./NavStyles.css"
import Hamburger from "./Hamburger";
import NavContent from "./NavContent";
import HamburgerMenu from "./HamburgerMenu";

const App = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(true);

    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen);
    }

    return (
        <div id="mainNavBar">
            <a href="../Home"><img src={logo} alt="Porch Logo" id="headerLogo"/></a>
            <div id="mobileMenu" className="navMenu" >
                <div id="hamburgerMenu" onClick={toggleHamburger}>
                    { hamburgerOpen ? <Hamburger /> : <HamburgerMenu /> }
                </div>
            </div>
            <div id="desktopMenu" className="navMenu">
                <ul> <NavContent /> </ul>
            </div>
        </div>
    );
}

export default App;