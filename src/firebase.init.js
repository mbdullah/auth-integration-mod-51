// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// DANGET DO NOT SHARE THIS FILE LOCALLY
const firebaseConfig = {
  apiKey: "AIzaSyDD63d04XbPpe97tSiRi-bQcQ--STN6vZ0",
  authDomain: "auth-integration-e2e73.firebaseapp.com",
  projectId: "auth-integration-e2e73",
  storageBucket: "auth-integration-e2e73.firebasestorage.app",
  messagingSenderId: "270267820238",
  appId: "1:270267820238:web:56603c2dd65154dda8889f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);