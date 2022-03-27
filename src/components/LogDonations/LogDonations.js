import React, { useState } from 'react'
import Steps from "./Steps"
import TopNavBar from "../TopNavBar/TopNavBar";
import { getAuth } from '@firebase/auth';
import { doc, getDoc, getFirestore } from '@firebase/firestore';
import app from '../../firebase/firebase';
import "./LogDonationsStyles.css"
import pencil from "./pencil.svg";

const App = () => {

    const [show, setShow] = useState(false);

    const [date, setDate] = useState("");
    const [donor_address, setDonorAddress] = useState("");
    const [type, setType] = useState("");
    const [amount, setAmount] = useState("");

    const auth = getAuth(app);
    const db = getFirestore(app);

    async function submit() {
        const data = {
            date: date,
            address: donor_address,
            donation: [
                {
                    type: type,
                    amont: amount
                }
            ]
        };

        const res = await db.collection('donations').add(data);
    }

    function add() {
        
    }

    return (
        <div>
            <TopNavBar />
            {show ? 
            <div>
                <p id="logsTitle"> Log Donations </p>
                <p id="logsTitle"> Donor's Address </p>
                <div>
                    <form id="address_dropdown" onChange={() => setDonorAddress()}>   
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
                <p id="logsTitle"> Donations </p>
                <table>
                    <tr>
                        <td>
                            <p id="logsSubtitle"> Amount </p>
                            <div>
                                <form id="amount" onChange={() => setAmount()}>   
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
                        </td>
                        <td>
                            <p id="logsSubtitle"> Type </p>
                            <div>
                                <form id="type" onChange={() => setType()}>   
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
                        </td>
                    </tr>
                </table>
                
                <button onClick={add}>Add</button>
                <p id="logsTitle"> Just Added </p>
                <div id="box">
                    <p id="address">300 Franklin St, Chapel Hill, NC 27514</p>
                    <p id="amount">3 bags</p>
                    <p id="address">305 Franklin St, Chapel Hill, NC 27514</p>
                    <p id="amount">1 box</p>
                </div>
                <br></br>
                <button id="submitButton" onClick={submit}>Submit</button>
            </div>
             : 
            <div>
                <p id="logsTitle"> Log Donations </p>
                <div id="stepsContainer"> <Steps /> </div>
                <p id="logsTitle"> Select Pick-Up Date </p>
                <input type="date" id="pick-up-date" name="pick-up-date" onChange={() => setDate()}></input>  
                <br></br>
                <br></br>
                <button id="startButton" onClick={() => setShow(s => !s)}>Start</button>
            </div>}

        </div>
    );
}

export default App;