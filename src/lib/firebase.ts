import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3yW7qDqU9KavoLLtaEYwPAI6dIAkji0o",
  authDomain: "devera-cf3f5.firebaseapp.com",
  projectId: "devera-cf3f5",
  storageBucket: "devera-cf3f5.firebasestorage.app",
  messagingSenderId: "883483086242",
  appId: "1:883483086242:web:d8f84ae66ef3b0ae0776fb",
  measurementId: "G-XGB9TV69P4"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
