import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';


const LoginForm = () => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await firebase.auth90.signInWithEmailAndPassword(email, password);
            // handles successfull login (redirects to user specific home page)
            console.log("Successfully logged in");
        } catch (error) {
            // handles error
            console.log("Error logging in");
        }
    };
    return (
    );
};
export default LoginForm;


