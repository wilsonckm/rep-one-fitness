// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//Per documentation, API key does not need to be in .env folder
const firebaseConfig = {
  apiKey: "AIzaSyBNct393X-Vd6W52-UEoO_IJM_O6asu_Vw",
  authDomain: "auth-development-f49e4.firebaseapp.com",
  projectId: "auth-development-f49e4",
  storageBucket: "auth-development-f49e4.appspot.com",
  messagingSenderId: "868526053286",
  appId: "1:868526053286:web:492e71c31392459a046167",
};

// // Firebase configuration object
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_STORAGE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get Firestore instance
export const db = getFirestore(app);

// Get Auth instance
export const auth = getAuth(app);
