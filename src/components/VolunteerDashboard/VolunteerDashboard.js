import React from 'react';
import Button from '../Button/Button';
import TopNavBar from "../TopNavBar/TopNavBar";
import Volunteer from "./Volunteer";
import "./VolunteerDashboardStyles.css"
import addItemsIcon from '../../assets/addItemsIcon.svg'
import setReminderIcon from '../../assets/setReminderIcon.svg'

const App = () => {
    return (
        <div>
            <TopNavBar />
            <p id="volunteerTitle">Dashboard</p>
            <div id="volunteerContainer"> <Volunteer/> </div>
            <div id="volunteerButtonContainer">
                <Button 
                    id="bigButton"
                    text="Log Donations"
                    icon={addItemsIcon}
                    href={"./Home"}
                />
                <Button 
                    id="bigButton"
                    text="Send Reminder"
                    icon={setReminderIcon}
                    href={"./Home"}
                />
            </div>
        </div>
    );
}

export default App;