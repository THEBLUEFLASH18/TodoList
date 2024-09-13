import React, { useState } from 'react';
import { auth } from './firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        try {
            await createUserWithEmailAndPassword( auth, email, password);
            alert('User created successfully!');
        }
        catch (error){
            alert(error.message)
        }
    }

    return(
        <>
        <div>
            <h2>Sign Up</h2>
            <input
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}       
            ></input>
            <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button onClick={handleSignUp}>Sign Up</button>
        </div>
        </>
    )
}

export default SignUp;