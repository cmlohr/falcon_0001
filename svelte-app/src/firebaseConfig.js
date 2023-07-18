// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa37CLTi2oG7RXYi3eIQ9ei9Nq6yGDAFI",
  authDomain: "falcon-0001.firebaseapp.com",
  projectId: "falcon-0001",
  storageBucket: "falcon-0001.appspot.com",
  messagingSenderId: "234226374348",
  appId: "1:234226374348:web:d29d65904a1cbcd1071469",
  measurementId: "G-LB4QZ43FZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);