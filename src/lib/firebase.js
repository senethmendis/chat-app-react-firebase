import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chat-app-react-a39a0.firebaseapp.com",
  projectId: "chat-app-react-a39a0",
  storageBucket: "chat-app-react-a39a0.appspot.com",
  messagingSenderId: "612628920023",
  appId: "1:612628920023:web:d6f8c67cfaf99086372292",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
