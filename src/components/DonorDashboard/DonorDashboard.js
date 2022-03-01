import React from 'react';
import TopNavBar from "../TopNavBar/TopNavBar";
import Donation from "./Donation";
import Button from "../Button";
import donate from "./donate.svg";

const App = () => {
    return (
        <div>
            <TopNavBar />
            <p id="donorTitle">Dashboard</p>
            <div id="donationContainer"> <Donation /> <Donation /> </div>
            <div>
                <Button id="newDonate"
                        text="Donate"
                        icon={donate}
                        func={function() {window.open("https://www.youtube.com/channel/UChAnqc_AY5_I3Px5dig3X1Q")}}/>
            </div>
        </div>
    );
}

export default App;