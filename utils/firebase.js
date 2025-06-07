// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBt5uUUZ73v91Muzvrdv9k6nhDzPuIo6FM",
  authDomain: "imovie-gpt.firebaseapp.com",
  projectId: "imovie-gpt",
  storageBucket: "imovie-gpt.firebasestorage.app",
  messagingSenderId: "197887803373",
  appId: "1:197887803373:web:718a4f5b59148e3461b1e4",
  measurementId: "G-RNMCCHM86C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if (typeof window !== "undefined") {
  getAnalytics(app);
}

export  const auth = getAuth(app);
