import { getAuth, createUserWithEmailAndPassword } from '@firebase/auth';
import { collection, doc, getFirestore, setDoc } from '@firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Card, Form, Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import app from '../../firebase/firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Login/Login.css';
import { Link } from 'react-router-dom';

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const roles = ["Volunteer", "Donor"];
    const [community, setCommunity] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [donorAddress, setDonorAddress] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);

    const updateEmail = (e) => {setEmail(e.target.value)};
    const updatePassword = (e) => {setPassword(e.target.value)};
    const updateName = (e) => {setName(e.target.value)};
    const updateCommunity = (e) => {setCommunity(e.target.value)};
    const updateNeighborhood = (e) => {setNeighborhood(e.target.value)};
    const updateDonorAddress = (e) => {setDonorAddress(e.target.value)};
    let history = useHistory();

    const handleRoleChange = (e) => {
        setRole(roles[e.target.value]);
    }

    useEffect(() => {
        setIsDisabled(role !== "Donor");
    }, [role]);


    const auth = getAuth(app);
    const db = getFirestore(app);

    const handleSignup = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((UserCredential) => {
            const user = UserCredential.user;
            (role === "Volunteer") ?
                (setDoc(doc(collection(db, "users"), user.uid), {
                    name: name, role: role, community: community, neighborhood: neighborhood,
                    historyAdded: { neighborhoodName: [], donations: [] }
                })) :
                (setDoc(doc(collection(db, "users"), user.uid), {
                    name: name, role: role, community: community, neighborhood: neighborhood,
                    address: donorAddress
                }))
        })
        .then(
            (role === "Volunteer") ?
            history.push('/volunteerDashboard') : history.push('/donorDashboard')
        )
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
        }
        );
    };
    
    return (
        <Container 
            className='d-flex align-items-center justify-content-center'
            style={{ minHeight: "100vh" }}
        >
            <div className="w-100" style={{ maxWidth: "500px"}}>
                <Card id='login'>
                    <Card.Body>
                        <h2 className="text-center mb-4">Create Account</h2>
                        <Form>
                            <Form.Group id="email">
                                <Form.Label>Email </Form.Label>
                                <Form.Control type="email" onChange={updateEmail} placeholder="Enter email" required></Form.Control>
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password </Form.Label>
                                <Form.Control type="password" onChange={updatePassword} placeholder="Enter password" required></Form.Control>
                            </Form.Group>
                            <Form.Group id="name">
                                <Form.Label>Name </Form.Label>
                                <Form.Control type="name" onChange={updateName} placeholder="Enter name" required></Form.Control>
                            </Form.Group>
                            <Form.Group id="roles">
                            <Form.Label>Role </Form.Label>
                                <Form.Select onChange={handleRoleChange}>
                                    <option>Select role</option>
                                    {roles.map((currentRole, key) => <option value={key}>{currentRole}</option>)}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Address </Form.Label>
                                <Form.Control type="address" onChange={updateDonorAddress} placeholder="Enter address" disabled={isDisabled}></Form.Control>
                            </Form.Group>
                            <Form.Group id="community">
                                <Form.Label>Community </Form.Label>
                                <Form.Control type="community" onChange={updateCommunity} placeholder="Enter community" required></Form.Control>
                            </Form.Group>
                            <Form.Group id="neighborhood">
                                <Form.Label>Neighborhood </Form.Label>
                                <Form.Control type="neighborhood" onChange={updateNeighborhood} placeholder="Enter neighborhood" required></Form.Control>
                            </Form.Group>
                            &nbsp;
                            <Button className="w-100" type="submit" id='button' onClick={handleSignup}>Create Account</Button>
                        </Form>
                        &nbsp;
                        <div className='d-flex align-items-center justify-content-center'>
                            Already have an account?&nbsp;<Link to="/login">Login</Link>
                        </div> 
                    </Card.Body>
                </Card>
            </div>
        </Container>     
    )
}