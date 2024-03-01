// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-88069.firebaseapp.com",
  projectId: "mern-blog-88069",
  storageBucket: "mern-blog-88069.appspot.com",
  messagingSenderId: "159833863870",
  appId: "1:159833863870:web:a2d170c460d2dc0dd410ef"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);