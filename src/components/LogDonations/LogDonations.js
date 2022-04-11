import React, { useState } from 'react'
import Steps from "./Steps"
import TopNavBar from "../TopNavBar/TopNavBar";
import { getAuth } from '@firebase/auth';
import { doc, getDoc, getFirestore } from '@firebase/firestore';
import app from '../../firebase/firebase';
import "./LogDonationsStyles.css"
import pencil from "./pencil.svg";
import donate from "../DonorDashboard/donate.svg";
import Button from "../Button/Button";

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
                <p id="logsName"> Log Donations </p>
                <p id="logsTitle"> Donor's Address </p>
                <div>
                    <form onChange={() => setDonorAddress()}>
                        <select id="address_dropdown">
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
                                    <input type="number" min="0.00" max="10000.00" step="0.01" defaultValue="1.00" id="sub_entry">

                                    </input>
                                </form>
                            </div>
                        </td>
                        <td>
                            <p id="logsSubtitle"> Type </p>
                            <div>
                                <form id="type" onChange={() => setType()}>
                                    <select id="sub_entry">
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

                <Button id={"smallButton"} text="Add" func={add}/>
                <p id="logsTitle"> Just Added </p>
                <div id="box">
                    <p id="address">300 Franklin St, Chapel Hill, NC 27514</p>
                    <p id="amount">3 bags</p>
                    <p id="address">305 Franklin St, Chapel Hill, NC 27514</p>
                    <p id="amount">1 box</p>
                </div>
                <br></br>
                <Button id={"smallButton"} text="Submit" func={submit}/>
            </div>
             : 
            <div>
                <p id="logsTitle"> Log Donations </p>
                <div id="stepsContainer"> <Steps /> </div>
                <p id="logsTitle"> Select Pick-Up Date </p>
                <input type="date" id="pick-up-date" name="pick-up-date" onChange={() => setDate()}/>
                <br></br>
                <br></br>
                <Button id="smallButton"
                        text="Start"
                        icon={donate}
                        func={() => setShow(s => !s)}
                />
            </div>}

        </div>
    );
}

export default App;