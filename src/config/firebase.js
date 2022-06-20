// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBroc4XrqQDI5-x4KY5lI0AzYGVIMjlXZQ",
  authDomain: "game-center-78d66.firebaseapp.com",
  databaseURL: "https://game-center-78d66-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "game-center-78d66",
  storageBucket: "game-center-78d66.appspot.com",
  messagingSenderId: "979216709373",
  appId: "1:979216709373:web:53bfc3420781d744433094"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
