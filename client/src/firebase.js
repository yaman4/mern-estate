// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-90f06.firebaseapp.com",
  projectId: "mern-estate-90f06",
  storageBucket: "mern-estate-90f06.appspot.com",
  messagingSenderId: "138071246124",
  appId: "1:138071246124:web:e04ca33958d4fd35e39889"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
