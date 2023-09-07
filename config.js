import firebase from 'firebase/compat/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDwGu9ihtOEBYlAKoYda_wf8hGmU3ZQOX0",
    authDomain: "lifeaid-ef819.firebaseapp.com",
    databaseURL: "https://lifeaid-ef819-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "lifeaid-ef819",
    storageBucket: "lifeaid-ef819.appspot.com",
    messagingSenderId: "663779725794",
    appId: "1:663779725794:web:029b23c7c31fed4659e9bb",
    measurementId: "G-4F75QT3YM7"
};

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const db = getDatabase();
export { db }