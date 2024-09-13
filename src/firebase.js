// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ6K1JsAJtju7HbiAwXcxXqcyFu6mtuLc",
  authDomain: "digital-todo-list.firebaseapp.com",
  projectId: "digital-todo-list",
  storageBucket: "digital-todo-list.appspot.com",
  messagingSenderId: "843820972465",
  appId: "1:843820972465:web:61ba0b3248f66aeae9e590",
  measurementId: "G-YXVWDMEG73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };