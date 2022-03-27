import React from 'react';
import TopNavBar from "../TopNavBar/TopNavBar";
import Donation from "./Donation";
import heart from "./donation-heart.png"

const App = () => {
    return (
        <div>
            <TopNavBar />
            <p id="donorTitle">Dashboard</p>
            <div id="donationContainer"> <Donation /> </div>
            <button id="newDonate">Donate
            <img id="Donation-Heart" src={heart} alt="heart icon"/>
            </button>
            <p id="nextDonationDay"></p>
        </div>
    );
}

export default App;