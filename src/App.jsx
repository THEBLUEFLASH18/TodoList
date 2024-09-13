import React, { useEffect, useState } from 'react'
import { auth } from './firebase.js'
import './App.css'
import SignIn from './SignIn.jsx'
import SignUp from './SignUp.jsx'
import ToDoList from './ToDoList.jsx'
import { onAuthStateChanged } from 'firebase/auth';

function App() {

  const [user, setUser] = useState(null)

  const onSignIn = () =>{
    const currentUser = auth.currentUser;
    setUser(currentUser)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
      setUser(currentUser);
    });
    return ()=> unsubscribe();
  }, []);

  if(user){
    return <ToDoList/>
  }
  else {
    return(
      <div>
        <SignIn onSignIn={onSignIn} />
        <SignUp />
      </div>
    )
  }

}

export default App
