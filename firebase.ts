// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy3BXPLxksWM7gT8iDfBQ9AZmjd-rcsVw",
  authDomain: "magnopus-c23c8.firebaseapp.com",
  projectId: "magnopus-c23c8",
  storageBucket: "magnopus-c23c8.firebasestorage.app",
  messagingSenderId: "581285349262",
  appId: "1:581285349262:web:aee6c69aef4b144e6146df",
  measurementId: "G-H1PDJJQEYL",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
const analytics = getAnalytics(app)
