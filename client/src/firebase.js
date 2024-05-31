// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-8868d.firebaseapp.com",
  projectId: "mern-blog-8868d",
  storageBucket: "mern-blog-8868d.appspot.com",
  messagingSenderId: "287727870683",
  appId: "1:287727870683:web:8c439bdd31296ddb9a22fe",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
