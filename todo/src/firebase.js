// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore}  from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqeG-VYypbuFdnTxKv0WPHLBkKqFQwvdc",
  authDomain: "todoo-5401a.firebaseapp.com",
  projectId: "todoo-5401a",
  storageBucket: "todoo-5401a.appspot.com",
  messagingSenderId: "725106623249",
  appId: "1:725106623249:web:cb187dc5df981711c2c2b0",
  measurementId: "G-EFK16BCHM3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=getFirestore(app);
export {db}