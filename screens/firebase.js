// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyBryuisayrWn5jVVZUCzOlG1pdI0TVjoVk",
    authDomain: "lifeaidtest-2c767.firebaseapp.com",
    databaseURL: "https://lifeaidtest-2c767-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "lifeaidtest-2c767",
    storageBucket: "lifeaidtest-2c767.appspot.com",
    messagingSenderId: "1085901492754",
    appId: "1:1085901492754:web:a2fed25b4a479f04823ecb",
    measurementId: "G-SYMS81K8YR"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default firebase;