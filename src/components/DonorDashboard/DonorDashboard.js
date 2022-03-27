import React from 'react';
import TopNavBar from "../TopNavBar/TopNavBar";
import Donation from "./Donation";

const App = () => {
    return (
        <div>
            <TopNavBar />
            <p id="donorTitle">Dashboard</p>
            <div id="donationContainer"> <Donation /> </div>
            <button id="newDonate">temp Donate Button</button>
        </div>
    );
}

export default App;