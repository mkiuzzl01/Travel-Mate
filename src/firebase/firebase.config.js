// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzpOsEoH9yTNDCk0puyqMH4z9yocpb8Ro",
  authDomain: "travel-mate-9fb7a.firebaseapp.com",
  projectId: "travel-mate-9fb7a",
  storageBucket: "travel-mate-9fb7a.appspot.com",
  messagingSenderId: "108302690574",
  appId: "1:108302690574:web:64b7c55f60030d6bf90f5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
