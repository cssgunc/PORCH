import React, {useState} from 'react';
import logo from "../../assets/img.png";
import "./NavStyles.css"
import Hamburger from "./Hamburger";
import NavContent from "./NavContent";


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
                    { hamburgerOpen ? <Hamburger /> : <NavContent /> }
                </div>
            </div>
            <div id="desktopMenu" className="navMenu">
                <ul>
                    <li className="navItem" ><a href="../Home" className="navItemLink">placeHolder1</a></li>
                    <li className="navItem"><a href="../Home" className="navItemLink">placeHolder2</a></li>
                    <li className="navItem"><a href="../Home" className="navItemLink">placeHolder3</a></li>
                    <li className="navItem"><a href="../Home" className="navItemLink">placeHolder4</a></li>
                </ul>
            </div>
        </div>
    );
}

export default App;