import React from 'react';
import TopNavBar from "../TopNavBar/TopNavBar";
import "./SettingsStyles.css"

const App = () => {
    return (
        <div>
            <TopNavBar />
            <p id="settingsTitle">Settings</p>
            <div id="settingsContainer">
                <form id="settingsForm">
                    <label className="settingsLabel" htmlFor="name">First Name: </label><br/>
                    <input className="settingsInput" name="name" id="name" type="text" defaultValue="john"/><br/>
                    <label className="settingsLabel" htmlFor="neighborhood">Email: </label><br/>
                    <input className="settingsInput" name="email" id="email" type="text" defaultValue="jd@gmail.com"/><br/>
                    <label className="settingsLabel" htmlFor="neighborhood">Neighborhood: </label><br/>
                    <input className="settingsInput" name="neighborhood" id="neighborhood" type="text" defaultValue="Northside"/><br/>
                    <label className="settingsLabel" htmlFor="community">Community: </label><br/>
                    <input className="settingsInput" name="community" id="community" type="text" defaultValue="Northside"/>
                </form>
            </div>
            <div id="buttonContainer">
                <button id="undoChanges">Cancel</button>
                <button id="submitChanges">Submit</button>
            </div>
        </div>
    );
}

export default App;