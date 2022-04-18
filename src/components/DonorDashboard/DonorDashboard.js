import React from 'react';
import TopNavBar from "../TopNavBar/TopNavBar";
import Donation from "./Donation";
import Button from "../Button/Button";
import donate from "./donate.svg";

const App = () => {
    return (
        <div>
            <TopNavBar />
            <p id="donorTitle">Dashboard</p>
            <div id="donationContainer"> <Donation /></div>
            <div>
                <Button id="bigButton"
                        text="Donate"
                        icon={donate}
                        href={"./Home"}
                />
            </div>
        </div>
    );
}

export default App;