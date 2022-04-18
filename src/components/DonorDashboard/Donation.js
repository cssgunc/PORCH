import React from 'react';
import { useState } from "react";
import app from '../../firebase/firebase';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { doc, getFirestore, getDoc } from '@firebase/firestore';
import pencil from "./pencil.svg";
import "./DonorDashboardStyles.css";

export default function Volunteer() {

    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [community, setCommunity] = useState("");
    const [neighborhood, setNeighborhood] = useState("");

    const auth = getAuth(app);
    const db = getFirestore(app);
    // Checks if user is logged in
    onAuthStateChanged(auth, (user) => {
        if (user) {
            getDoc(doc(db, "users", user.uid))
            .then((snapshot) => {
                setName(snapshot.get("name"))
                setRole(snapshot.get("role"))
                setNeighborhood(snapshot.get("neighborhood"))
                setCommunity(snapshot.get("community"))
            });
        }
    });

    return (
        <div>
            <div id="donation">
                <div id="donationText">
                    <p id="donationName" className="donationTextItem">{name}</p>
                    <p id="donationMemberType" className="donationTextItem">{role}</p>
                    <p id="donationCommunity" className="donationTextItem">Community: {community}</p>
                    <p id="donationNeighborhood" className="donationTextItem">Neighborhood: {neighborhood}</p>
                </div>
                <div id="donationEditField">
                    <img id="donationEdit" src={pencil} alt="pencil icon"/>
                </div>
            </div>
        </div>
    )
}