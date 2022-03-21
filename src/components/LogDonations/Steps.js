import React from 'react';
import "./LogDonationsStyles.css"
import pencil from "./pencil.svg";

export default function Steps() {
    return (
        <div>
            <div id="steps">
                <div id="stepsText">
                    <p id="stepsName" className="donationTextItem">Steps</p>
                    <ol>
                        <li id="stepsInstruction" className="stepsTextItem">Enter the date.</li>
                        <li id="stepsInstruction" className="stepsTextItem">Select current pickup address.</li>
                        <li id="stepsInstruction" className="stepsTextItem">Enter amount of items and type.</li>
                        <li id="stepsInstruction" className="stepsTextItem">Add.</li>
                        <li id="stepsInstruction" className="stepsTextItem">Once all items have been picked up, click submit</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}