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
<<<<<<< HEAD
            <button id="newDonate">Donate
            <img id="Donation-Heart" src={heart} alt="heart icon"/>
            </button>
            <p id="nextDonationDay"></p>
=======
            <button id="newDonate">temp Donate Button</button>
>>>>>>> 96ec218da18bccddaef250e5d3acb0a389d4dd3a
        </div>
    );
}

export default App;