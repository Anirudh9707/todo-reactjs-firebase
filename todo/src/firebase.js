// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUpMUc44mfyCSyGnve-yjs0qVHhVVb-ZY",
  authDomain: "todo-b2c20.firebaseapp.com",
  projectId: "todo-b2c20",
  storageBucket: "todo-b2c20.appspot.com",
  messagingSenderId: "510948516417",
  appId: "1:510948516417:web:3564f9797b8c747ac5dcc0",
  measurementId: "G-85LGD8GQHM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(firebaseApp);
export {db}
const analytics = getAnalytics(app);