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
                        func={function() {}}/>
            </div>
        </div>
    );
}

export default App;