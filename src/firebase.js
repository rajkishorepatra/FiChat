import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB9gik1_Q-catmkoX5mkcyVMg8nZb064NQ",
  authDomain: "fichat-3fab3.firebaseapp.com",
  projectId: "fichat-3fab3",
  storageBucket: "fichat-3fab3.appspot.com",
  messagingSenderId: "231559263075",
  appId: "1:231559263075:web:25bcb4c9e9290bfd319956"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()