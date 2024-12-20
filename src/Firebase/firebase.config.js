
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCvQDe4d-VIOAt1Sso78DlaWABjp-PmE5E",
  authDomain: "react-dragon-news-cbac8.firebaseapp.com",
  projectId: "react-dragon-news-cbac8",
  storageBucket: "react-dragon-news-cbac8.firebasestorage.app",
  messagingSenderId: "177510711504",
  appId: "1:177510711504:web:e9be08045b6f5a4bea9ed5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;