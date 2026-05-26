 import { initializeApp } from "firebase/app"; 

const firebaseConfig = {
  apiKey: "AIzaSyCD4CLNblk806xh9oYGbIIrJGo-KiJPW7s",
  authDomain: "gamehub-f8d2f.firebaseapp.com",
  projectId: "gamehub-f8d2f",
  storageBucket: "gamehub-f8d2f.firebasestorage.app",
  messagingSenderId: "367496926694",
  appId: "1:367496926694:web:6a2d07cd4e17848438b227"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;