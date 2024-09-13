import React, { useState, useEffect } from 'react';
import { auth, db } from './firebase';
import { collection, addDoc, query, where, onSnapshot } from 'firebase/firestore';
import { signOut } from 'firebase/auth';


function ToDoList() {
    const [todoInput, setTodoInput ] = useState('');
    const [todos, setTodos] = useState([]);

    const handleAddTodo = async () => {
        const user = auth.currentUser;
        if(user && todoInput) {
            try {
                await addDoc(collection(db, 'todos'),
            {
                uid: user.uid,
                text: todoInput,
                timestamp: Date.now(),
            });
            setTodoInput('')
            } catch(error) {
                alert(error.message);
            }
        }
    };

    const handleSignOut = async() =>{
        try{
            await signOut(auth);
            alert('Signed out successfully!');
        }
        catch(error){
            alert(error.message)
        }
    };

    useEffect(() => {
        const user = auth.currentUser;
        if (user) {
            const q = query(collection(db, 'todos'), where('uid', '==', user.uid));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const items = [];
                querySnapshot.forEach((doc) => {
                    items.push({id: doc.id, ...doc.data()});
                });
                setTodos(items);
            });
            return ()=> unsubscribe();
        }
    }, []);


    return( 
        <>
            <div>
                <h2>Marcos' To-Do List</h2>
                <input 
                type='text'
                placeholder='New To-Do Item'
                value={todoInput}
                onChange={(e) => setTodoInput(e.target.value)}
                ></input>
                <button onClick={handleAddTodo}>Add</button>
                <ul>
                    {todos.map((todo) =>(<li key={todo.id}>{todo.text}</li>))}
                </ul>
                <button onClick={handleSignOut}>Sign Out</button>
            </div>
        </>
    );


}

export default ToDoList;