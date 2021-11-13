// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn1GgD2YURrZ7PHPedjWyOgMvwNdhac80",
  authDomain: "porch-232fa.firebaseapp.com",
  projectId: "porch-232fa",
  storageBucket: "porch-232fa.appspot.com",
  messagingSenderId: "716863162709",
  appId: "1:716863162709:web:115af54068b4413ea007dc",
  measurementId: "G-G428C8R4BR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);


export default app;