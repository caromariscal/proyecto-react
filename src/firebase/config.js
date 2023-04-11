// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAvFmryr5oyQ2DblyJ_x-hKUJZjrAQlaPE",
    authDomain: "equipar2-f3ae8.firebaseapp.com",
    projectId: "equipar2-f3ae8",
    storageBucket: "equipar2-f3ae8.appspot.com",
    messagingSenderId: "121717318156",
    appId: "1:121717318156:web:6066e74e46f9a48faf0429"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()