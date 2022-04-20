import React, { useState, useEffect } from 'react'
import Steps from "./Steps"
import TopNavBar from "../TopNavBar/TopNavBar";
import { getAuth } from '@firebase/auth';
import { getFirestore, collection, addDoc, doc, getDoc,getDocs, where, query} from '@firebase/firestore';
import app from '../../firebase/firebase';
import "./LogDonationsStyles.css"
import pencil from "./pencil.svg";
import donate from "../DonorDashboard/donate.svg";
import Button from "../Button/Button";
import { async } from '@firebase/util';

const App = () => {

    const [formData, setFormData] = useState({
        date: "mm/dd/yyyy",
        donor_address: "option1",
        type: "option1",
        amount: 1.00
    });
    const [show, setShow] = useState(false);
    const [addr, setAddr] = useState("Option3");
    const [donType, setdonType] = useState("Option3");
    const [amnt, setAmnt] = useState(1);
    const [date, setDate] = useState(new Date());
    const auth = getAuth(app);
    const db = getFirestore(app);


    const [dataToShow, setData] = useState([]); // initialize it

    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    useEffect (() => {
        const getPostsFromFirebase = [];
        const subscriber = async() => {
            try {
                const q = query(collection(db, "donations"), where("date", "==", date));

                const querySnapshot = await getDocs(q);//collection(db, "donations"));
                
                querySnapshot.forEach((doc) => {
                    getPostsFromFirebase.push({
                        ...doc.data(), //spread operator
                        key: doc.id, // `id` given to us by Firebase
                    });
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                });

                setPosts(getPostsFromFirebase);
                setLoading(false);
            } catch (e) {
                console.log(e)
            }
            
        }
        
        // return cleanup function
        // return () => subscriber();
        subscriber();
    }, [loading]); // empty dependencies array => useEffect only called once


    const updateInput = e => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        })
    }

    const updateAmt = e => {
        
        setAmnt(e.target.value)
    }
    
    const updatedonType = e => {

        setdonType(e.target.value)
    }

    const updateAddr = e => {
        setAddr(e.target.value)
    }

    const updateDate = e => {
        setDate(e.target.value)
    }

    


    const handleSubmit = async event => {
        setLoading([])
        event.preventDefault()

        const data = {
            date: date,
            donor_address: addr,
            type: donType,
            amount: amnt
        };
        var test_s = ""
        try {
            console.log(data)
            const docRef = await addDoc(collection(db, "donations"), data);
            console.log("Document written with ID: ", docRef.id);
            test_s = docRef.id

          } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

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
                        <select id="address_dropdown" name="donor_address" onChange={updateAddr}>
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
                                <form id="amount" onChange={updateAmt}>
                                    <input type="number" min="0.00" max="10000.00" step="0.01" defaultValue="1.00" id="sub_entry">

                                    </input>
                                </form>
                            </div>
                        </td>
                        <td>
                            <p id="logsSubtitle"> Type </p>
                            <div>
                                <form id="type" onChange={updatedonType}>
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
                    
                    {
                        posts.length > 0 ? (
                            posts.map((post) =><div><p id="address">{post.donor_address}</p>
                            <p id="amount">{post.amount} {post.type}</p> </div> )
                          ) : (
                            <p> No Responses Yet</p>
                          )

                    }
                    
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
                <input type="date" id="pick-up-date" name="date" onChange={updateDate}/>
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