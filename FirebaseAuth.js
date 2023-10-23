// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE1yXzW2LJE6Gzxa1ZumGSnmNC7lP3_JY",
  authDomain: "bereaconnect-71183.firebaseapp.com",
  projectId: "bereaconnect-71183",
  storageBucket: "bereaconnect-71183.appspot.com",
  messagingSenderId: "955846602867",
  appId: "1:955846602867:web:4cd6d1931a57b454cbfa06",
  measurementId: "G-SEPZ9FHR5E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);