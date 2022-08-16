// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , createUserWithEmailAndPassword} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdT6mryP2vXZLnz0Jb36Vo1TZ9LHE0mLM",
  authDomain: "authentication-practice-953b2.firebaseapp.com",
  projectId: "authentication-practice-953b2",
  storageBucket: "authentication-practice-953b2.appspot.com",
  messagingSenderId: "818169999826",
  appId: "1:818169999826:web:0a946bbc480e7af6a0580b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export function signUp(email, password) {
   return  createUserWithEmailAndPassword(auth, email, password);
} 
