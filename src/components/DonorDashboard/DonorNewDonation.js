import React from 'react';
import TopNavBar from "../TopNavBar/TopNavBar";

const App = () => {
    let datePickerId;
    // Define earliest pickup date as current day.
    // TODO: Determine when they want earliest pickup date to be.
    datePickerId = new Date().toISOString().split("T")[0];
    return (
        <div>
            <TopNavBar />
            <p id="donorTitle">Donate</p>
            <div id="newDonationContainer">
                <p id="pickUpDateLabel" className="donationTextItem">Select Pick-Up Date</p>
                <input type="date" id="pickUpDate" min={datePickerId}></input> <br />
                <button id="submitNewDonate">Submit</button>
            </div>
        </div>
    );
}

export default App;