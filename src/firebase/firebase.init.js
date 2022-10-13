// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOBSXa-w4Zebx7YPRr-8-Vo1RccsnrZS4",
  authDomain: "simple-firebase-authenti-a6a5f.firebaseapp.com",
  projectId: "simple-firebase-authenti-a6a5f",
  storageBucket: "simple-firebase-authenti-a6a5f.appspot.com",
  messagingSenderId: "502509436674",
  appId: "1:502509436674:web:46a48de16517b525ea0c1b",
  measurementId: "G-FPN9Y07D3X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;