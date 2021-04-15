import React from 'react';
import './Login.css';
import googleImg from '../../../images/google.png';
import educationIcon from '../../../images/educationalicon.png';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL,
                };
                setLoggedInUser(signedInUser);
                console.log(signedInUser);
                history.replace(from);
            }).catch((error) => {
                const errorMessage = error.message;
                const email = error.email;
                console.log(errorMessage, email)
            });
    }
    return (
        <div>
            <div className="d-flex justify-content-center mt-5">
                <div className="mt-2 mr-2">
                    <img style={{ width: '80px' }} src={educationIcon} alt="" />
                </div>
                <div className="nav-header">
                    <h1 style={{ letterSpacing: '10px', color: '#ff4880' }}>WISDOM</h1>
                    <h3 style={{ color: '#3a4256' }}>Coaching Center</h3>
                </div>
            </div>
            <div className="loginTitle container mt-5 mb-5">
                <h1>Please Login</h1>
            </div>
            <div className="login">
                <button onClick={handleGoogleSignIn}>
                    <img src={googleImg} alt="" />
                Continue With Google
            </button>
            </div>
        </div>
    );
};

export default Login;