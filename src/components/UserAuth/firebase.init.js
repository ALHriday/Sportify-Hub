// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsum1bxHEKj_-VVgW6_6xQXAvSSjgINBA",
  authDomain: "sportify-hub.firebaseapp.com",
  projectId: "sportify-hub",
  storageBucket: "sportify-hub.firebasestorage.app",
  messagingSenderId: "239686371457",
  appId: "1:239686371457:web:39fbc6d165d6d03f29a580"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);