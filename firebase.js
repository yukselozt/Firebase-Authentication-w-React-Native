// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0nAoi-e7pscTQzw7J2wgf30UviSwDM_s",
  authDomain: "fir-auth-c0016.firebaseapp.com",
  projectId: "fir-auth-c0016",
  storageBucket: "fir-auth-c0016.appspot.com",
  messagingSenderId: "2790729032",
  appId: "1:2790729032:web:1cb183c9ecd69ffb063f7d",
};

// Initialize Firebase

export const FIREBASE_APP =
  getApps.length < 1 ? initializeApp(firebaseConfig) : null;
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
