import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import { doc, getDoc, getFirestore } from '@firebase/firestore';
import React, { useState } from 'react'
import { Card, Form, Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Login/Login.css';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const updateEmail = (e) => {setEmail(e.target.value)};
    const updatePassword = (e) => {setPassword(e.target.value)};
    let history = useHistory();

    const auth = getAuth(app);
    const db = getFirestore(app);

    const handleLogin = (e) => {
        
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((UserCredential) => {
            const user = UserCredential.user;
            const docRef = doc(db, "users", user.uid);
            getDoc(docRef)
            .then((snapshot) => {
                (snapshot.get("role") === "Volunteer") ? 
                history.push('/volunteerDashboard') : history.push('/donorDashboard'); //Change when get routes for different users
            })
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
        });
    };

    return (
        <Container 
            className='d-flex align-items-center justify-content-center'
            style={{ minHeight: "100vh" }}
        >
            <div className="w-100" style={{ maxWidth: "500px"}}>
                <Card id='login'>
                    <Card.Body>
                        <h2 className="text-center mb-4">Sign In</h2>
                        <Form>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" onChange={updateEmail} placeholder="Enter email" required></Form.Control>
                            </Form.Group>
                            &nbsp;
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" onChange={updatePassword} placeholder="Enter password" required></Form.Control>
                            </Form.Group>
                            &nbsp;
                            <Button className="w-100" type="submit" id='button' onClick={handleLogin}>Login</Button>
                        </Form>
                        &nbsp;
                        <div className='d-flex align-items-center justify-content-center'>
                            Need an account?&nbsp;<Link to="/signup">Create Account</Link>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </Container>     
    )
}