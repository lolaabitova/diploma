// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { collection, getFirestore } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkmRWrZVTC_bPxP-WswHajzP0-I0MPagI",
  authDomain: "diploma-6bd70.firebaseapp.com",
  projectId: "diploma-6bd70",
  storageBucket: "diploma-6bd70.appspot.com",
  messagingSenderId: "966272690108",
  appId: "1:966272690108:web:0ba504347069e7cc502db9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export const categoryCollection = collection(db, "categories");
export const productCollection = collection(db, "products");
export const orderCollection = collection(db, "orders")

const provider = new GoogleAuthProvider();
export const logIn = () => signInWithPopup(auth, provider);
export const logOut = () => signOut(auth);
export const onAuthChange = (callback) => onAuthStateChanged(auth, callback);
