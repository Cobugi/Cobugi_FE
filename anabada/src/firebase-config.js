// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSUDaiLKi8SGKSMpT7tLJ9yZaj4SQeZD4",
  authDomain: "anabada-c9c9c.firebaseapp.com",
  projectId: "anabada-c9c9c",
  storageBucket: "anabada-c9c9c.appspot.com",
  messagingSenderId: "1005408727922",
  appId: "1:1005408727922:web:114aa6ce3eb2f5e27aa3eb",
  measurementId: "G-5WJBB3GGLE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);