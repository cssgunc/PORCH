import React, {useState} from 'react';
import TopNavBar from "../TopNavBar/TopNavBar";
import "./SettingsStyles.css"
import {getAuth, onAuthStateChanged} from "@firebase/auth";
import app from "../../firebase/firebase";
import {collection, doc, getDoc, addDoc, getFirestore, setDoc} from "@firebase/firestore";
import {Form} from "react-bootstrap";

export default function Settings() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [community, setCommunity] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [hours, setHours] = useState("");

    const updateName = (e) => {setName(e.target.value)};
    const updateEmail = (e) => {setEmail(e.target.value)};
    const updatePassword = (e) => {setPassword(e.target.value)};

    const auth = getAuth(app);
    const db = getFirestore(app);
    let userUid = null;

    // Checks if user is logged in
    onAuthStateChanged(auth, (user) => {
        if (user) {
            userUid = user.uid;
            getDoc(doc(db, "users", user.uid))
                .then((snapshot) => {
                    setName(snapshot.get("name"))
                    setNeighborhood(snapshot.get("neighborhood"))
                    setCommunity(snapshot.get("community"))
                    setEmail(snapshot.get("email"))
                });
        }
    });

    const handleSubmit = async event => {
        event.preventDefault()

        try {
            const docRef = await setDoc(doc(db, "users", userUid), {
                name: name,
                email: email,
                neighborhood: neighborhood,
                community: community
            });
            console.log("Document written with ID: ", userUid);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <div>
            <TopNavBar />
            <p id="settingsTitle">Settings</p>
            <div id="settingsContainer">
                <Form id="settingsForm">
                    <Form.Group id="name">
                        <Form.Control className="settingsInput" name="name" type="text" defaultValue={name} onChange={updateName}/>
                    </Form.Group>
                    <Form.Group id="email">
                    <Form.Control className="settingsInput" name="email" id="email" type="text" defaultValue={email} onChange={updateEmail}/>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Control className="settingsInput" name="password" id="password" type="password" defaultValue={password} onChange={updatePassword}/>
                    </Form.Group>
                    <Form.Group id="neighborhood">
                        <Form.Control className="settingsInput" name="neighborhood" type="text" defaultValue={neighborhood} readOnly/>
                    </Form.Group>
                    <Form.Group id="community">
                        <Form.Control className="settingsInput" name="community" type="text" defaultValue={community} readOnly/>
                    </Form.Group>
                    <Form.Group id="hours">
                        <Form.Control className="settingsInput" name="hours" type="text" defaultValue={hours} readOnly/>
                    </Form.Group>
                </Form>
            </div>
            <div id="buttonContainer">
                <button id="submitChanges" type="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}