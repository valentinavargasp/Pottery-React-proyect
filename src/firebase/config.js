import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB9uV6xzRe5FUCasSaA0huskwwUocA0F5Q",
    authDomain: "pottery-e-commerce-d6db2.firebaseapp.com",
    projectId: "pottery-e-commerce-d6db2",
    storageBucket: "pottery-e-commerce-d6db2.appspot.com",
    messagingSenderId: "1034672528465",
    appId: "1:1034672528465:web:6a8c5f8a0359f9d2426c70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)