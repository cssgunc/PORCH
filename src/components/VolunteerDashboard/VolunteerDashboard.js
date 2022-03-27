import React from 'react';
import TopNavBar from "../TopNavBar/TopNavBar";
import Volunteer from "./Volunteer";
import "./VolunteerDashboardStyles.css"

const App = () => {
    return (
        <div>
            <TopNavBar />
            <p id="volunteerTitle">Dashboard</p>
            <div id="volunteerContainer"> <Volunteer/> </div>
            <div id="volunteerButtonContainer">
                <button id="logDonationsButton">Log Donations</button>
                <button id="sendReminderButton">Send Reminder</button>
            </div>
        </div>
    );
}

export default App;