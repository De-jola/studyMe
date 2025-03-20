import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMTmBAASjiriEPt0H1eyHqlk5qQ4p3eMc",
  authDomain: "studyme-7705c.firebaseapp.com",
  projectId: "studyme-7705c",
  storageBucket: "studyme-7705c.firebasestorage.app",
  messagingSenderId: "559501294408",
  appId: "1:559501294408:web:a642be92f3b9c4c755917d",
  measurementId: "G-KJ59PTB261",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, analytics, googleProvider };
