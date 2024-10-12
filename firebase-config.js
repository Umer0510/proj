// Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhWqvsNr2ZqQpIkg3yhsMgtfv4SSsoQ3c",
  authDomain: "e-commerce-a8559.firebaseapp.com",
  projectId: "e-commerce-a8559",
  storageBucket: "e-commerce-a8559.appspot.com",
  messagingSenderId: "524127507630",
  appId: "1:524127507630:web:09ee4a92c2cbab8e60093f",
  measurementId: "G-TZ9XZPRX4X"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
