import React from 'react';
import "./DonorDashboardStyles.css"
import pencil from "./pencil.svg";

export default function Donation() {
    return (
        <div>
            <div id="donation">
                <div id="donationText">
                    <p id="donationName" className="donationTextItem">Jane Smith</p>
                    <p id="donationMemberType" className="donationTextItem">Donor</p>
                    <p id="donationCommunity" className="donationTextItem">Community: Chapel Hill / Carborro</p>
                    <p id="donationNeighborhood" className="donationTextItem">Neighborhood: 140 W Franklin</p>
                </div>
                <div id="donationEditField">
                    <img id="donationEdit" src={pencil} alt="pencil icon"/>
                </div>
            </div>
        </div>
    )
}