// import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: <YOURAPIKEY>,
//   authDomain: <YOURAUTHDOAMIN>,
//   projectId: <YOURPROJECTID>,
//   storageBucket: <YOURSTORAGEBUCKET>,
//   messagingSenderId: <YOURMESSAGINGSENDERID>,
//   appId: <YOURAPPID>,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu0YaMf4BtHeHFQK1bFgHbXZiB5wbTXDw",
  authDomain: "game-store-3f0b8.firebaseapp.com",
  projectId: "game-store-3f0b8",
  storageBucket: "game-store-3f0b8.appspot.com",
  messagingSenderId: "413879253102",
  appId: "1:413879253102:web:1ddcd1a5d781320b610e7f",
  measurementId: "G-JNSFBD1BFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;