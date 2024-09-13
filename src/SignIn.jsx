import React, { useState } from "react";
import { auth } from './firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

function SignIn({ onSignIn }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    const handleSignIn = async() => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            onSignIn()
        }
        catch(error) {
            alert(error.message);
        }
    };

    return (
        <>
        <div>
            <h2>Sign In</h2>
            <input 
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button onClick={handleSignIn}>Sign In</button>
        </div>
        </>
    );

}

export default SignIn;