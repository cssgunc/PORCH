import React from 'react';
import { useState } from "react";
import app from '../../firebase/firebase';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { doc, getFirestore, setDoc, getDoc } from '@firebase/firestore';
import pencil from "./pencil.svg";
import "./VolunteerDashboardStyles.css";

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
            <div id="volunteer">
                <div id="volunteerText">
                    <p id="volunteerName" className="volunteerTextItem">{name}</p>
                    <p id="volunteerMemberType" className="volunteerTextItem">{role}</p>
                    <p id="volunteerCommunity" className="volunteerTextItem">Community: {community}</p>
                    <p id="volunteerNeighborhood" className="volunteerTextItem">Neighborhood: {neighborhood}</p>
                </div>
                <div id="volunteerEditField">
                    <img id="volunteerEdit" src={pencil} alt="pencil icon"/>
                </div>
            </div>
        </div>
    )
}