// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxmeAirUTCT8iZx03r2tWnFcUTbIJd_mo",
  authDomain: "myblog-361cd.firebaseapp.com",
  projectId: "myblog-361cd",
  storageBucket: "myblog-361cd.appspot.com",
  messagingSenderId: "78974068057",
  appId: "1:78974068057:web:ecfe73f1e3c8b31a75d848",
  measurementId: "G-VX0V02LQ9R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fireDb=getFirestore(app)
const auth=getAuth(app)
const storage=getStorage(app)

export {fireDb,auth,storage}