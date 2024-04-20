import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAEHj-YvCBT5HKwMadaoxt5NBfyLenBWaQ",
  authDomain: "group2-project-42d40.firebaseapp.com",
  projectId: "group2-project-42d40",
  storageBucket: "group2-project-42d40.appspot.com",
  messagingSenderId: "186092037798",
  appId: "1:186092037798:web:ec651b6e1f1931f6a6b667",
  measurementId: "G-C191MDPK6S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;