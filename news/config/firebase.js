// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl7Xv4lk6I_yH5_KL-a1wYpRV_X9dre6o",
  authDomain: "fakenews-754c0.firebaseapp.com",
  projectId: "fakenews-754c0",
  storageBucket: "fakenews-754c0.appspot.com",
  messagingSenderId: "784390133369",
  appId: "1:784390133369:web:1c47a0cf12e628c04126a8",
  measurementId: "G-QD7CRSQYQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);