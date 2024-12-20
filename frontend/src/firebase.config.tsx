// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaQrXszrHgvWn_zETD7Eg70anYVfRt4ro",
  authDomain: "aura-cuts.firebaseapp.com",
  projectId: "aura-cuts",
  storageBucket: "aura-cuts.firebasestorage.app",
  messagingSenderId: "149235532841",
  appId: "1:149235532841:web:fa17d7c1d93480ca1f0838",
  measurementId: "G-5WBXG5SWEJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);