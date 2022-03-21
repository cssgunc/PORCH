import React from 'react';
import TopNavBar from "../TopNavBar/TopNavBar";
import Steps from "./Steps";


const App = () => {
    return (
        <div>
            <TopNavBar />
            <p id="logsTitle"> Log Donations </p>
            <div id="stepsContainer"> <Steps /> </div>
            <p id="logsTitle"> Select Pick-Up Date </p>
            <div id="stepsContainer">
            <form id="dropMenu">   
                <select>  
                <option value = "Select"> Select...   
                </option>  
                <option value = "Option1"> Option1 
                </option>  
                <option value = "Option2"> Option2 
                </option>  
                <option value = "Option3"> Option3 
                </option>  
                </select>  
            </form>
            </div>  
            <button id="startButton"> temp start Button</button>
        </div>
    );
}

export default App;