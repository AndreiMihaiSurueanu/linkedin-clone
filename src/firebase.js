// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUYyRxPuIeW6S3OCRIwMUyB3l-YWai4xs",
  authDomain: "linkedin-clone9.firebaseapp.com",
  projectId: "linkedin-clone9",
  storageBucket: "linkedin-clone9.appspot.com",
  messagingSenderId: "167120131386",
  appId: "1: 167120131386: web: 4a05428ba1c7692840ac03",
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export {
  db,
  auth,
  collection,
  onSnapshot,
  addDoc,
  query,
  orderBy,
  serverTimestamp,
  updateProfile,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
};
