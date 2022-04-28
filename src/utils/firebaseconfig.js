// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpdw-5KH7jhtnezEOOoux_eiYNL-baTVo",
  authDomain: "shoederhouse.firebaseapp.com",
  projectId: "shoederhouse",
  storageBucket: "shoederhouse.appspot.com",
  messagingSenderId: "365608341997",
  appId: "1:365608341997:web:e089d8e46cc8b4784c57e4",
  measurementId: "G-5TN45N4Z6R"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;