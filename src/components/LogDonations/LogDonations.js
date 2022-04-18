import React, { useState } from 'react'
import Steps from "./Steps"
import TopNavBar from "../TopNavBar/TopNavBar";
import { getAuth } from '@firebase/auth';
import { getFirestore, collection, addDoc } from '@firebase/firestore';
import app from '../../firebase/firebase';
import "./LogDonationsStyles.css"
import pencil from "./pencil.svg";
import donate from "../DonorDashboard/donate.svg";
import Button from "../Button/Button";

const App = () => {

    const [formData, setFormData] = useState({});
    const [show, setShow] = useState(false);

    const updateInput = e => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = async event => {
        event.preventDefault()

        const data = {
            date: formData.date,
            donor_address: formData.donor_address,
            type: formData.type,
            amount: formData.amount
        };

        try {
            const docRef = await addDoc(collection(db, "donations"), data);
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
        }

        setFormData({
            date: '',
            donor_address: '',
            type: '',
            amount: '',
            })
    }

    const auth = getAuth(app);
    const db = getFirestore(app);

    function add() {
        
    }

    return (
        <div>
            <TopNavBar />
            {show ? 
            <div>
                <form onSubmit={handleSubmit}>
                <p id="logsTitle"> Log Donations </p>
                <p id="logsName"> Donor's Address </p>
                <div>
                    <form>
                        <select id="address_dropdown" name="donor_address" onChange={updateInput}>
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
                <p id="logsName"> Donations </p>
                <table>
                    <tr>
                        <td>
                            <p id="logsSubtitle"> Amount </p>
                            <div>
                                <form id="amount" onChange={updateInput}>
                                    <input type="number" min="0.00" max="10000.00" step="0.01" defaultValue="1.00" id="sub_entry">

                                    </input>
                                </form>
                            </div>
                        </td>
                        <td>
                            <p id="logsSubtitle"> Type </p>
                            <div>
                                <form id="type" onChange={updateInput}>
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
                <p id="logsName"> Just Added </p>
                <div id="box">
                    <p id="address">300 Franklin St, Chapel Hill, NC 27514</p>
                    <p id="amount">3 bags</p>
                    <p id="address">305 Franklin St, Chapel Hill, NC 27514</p>
                    <p id="amount">1 box</p>
                </div>
                <br></br>
                <Button id={"smallButton"} text="Submit" type="submit"/>
                </form>
            </div>
             : 
            <div>
                <p id="logsTitle"> Log Donations </p>
                <div id="stepsContainer"> <Steps /> </div>
                <p id="logsTitle"> Select Pick-Up Date </p>
                <input type="date" id="pick-up-date" name="date" onChange={updateInput}/>
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