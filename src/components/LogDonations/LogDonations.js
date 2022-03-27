import React from 'react';
import TopNavBar from "../TopNavBar/TopNavBar";
import Steps from "./Steps";


const App = () => {

    let datePickerId;
    // Define earliest pickup date as current day.
    // TODO: Determine when they want earliest pickup date to be.
    datePickerId = new Date().toISOString().split("T")[0];
    return (
        <div>
            <TopNavBar />
            <p id="logsTitle"> Log Donations </p>
            <div id="stepsContainer"> <Steps /> </div>
            <p id="logsTitle"> Select Pick-Up Date </p>
            <div id="dateContainer">
                <input type="date" id="pickUpDate" min={datePickerId}></input> <br />
            </div>  
            <button id="startButton"> temp start Button</button>
        </div>
    );

    
}

export default App;