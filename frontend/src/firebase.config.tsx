// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDftJZvjuX3jtMRBCVB4fCf_4z7Uc85Qjg",
  authDomain: "auracuts-e3f63.firebaseapp.com",
  projectId: "auracuts-e3f63",
  storageBucket: "auracuts-e3f63.firebasestorage.app",
  messagingSenderId: "931076559070",
  appId: "1:931076559070:web:f3a2249dc62811d7d6324f",
  databaseURL:"https://auracuts-e3f63-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);