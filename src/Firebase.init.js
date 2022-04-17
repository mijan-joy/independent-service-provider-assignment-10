// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADjviMxmQWBxvnDeWLVyt1_Nr87dIMHRU",
  authDomain: "kanun-assingment10.firebaseapp.com",
  projectId: "kanun-assingment10",
  storageBucket: "kanun-assingment10.appspot.com",
  messagingSenderId: "956288101857",
  appId: "1:956288101857:web:3f68427635eddd7aeab6a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;