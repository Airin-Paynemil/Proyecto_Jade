// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcOmqHEnj3_FfAFuLdX9xAXjK4gZ0XtI8",
  authDomain: "liteclaw-57f46.firebaseapp.com",
  projectId: "liteclaw-57f46",
  storageBucket: "liteclaw-57f46.appspot.com",
  messagingSenderId: "281170447741",
  appId: "1:281170447741:web:6647e966e679d69c9ad014",
  measurementId: "G-LP9TCJFJJ2"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);