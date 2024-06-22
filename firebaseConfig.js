// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhgg2P6vyLNIvZBP29SDve530ZBaBSv4E",
  authDomain: "ebuddytest-21f7a.firebaseapp.com",
  projectId: "ebuddytest-21f7a",
  storageBucket: "ebuddytest-21f7a.appspot.com",
  messagingSenderId: "554956884168",
  appId: "1:554956884168:web:c4cd7b1d5d463fdd74bdfd",
  measurementId: "G-LXTGLGFB10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);