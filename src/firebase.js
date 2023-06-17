import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAkdohTaUr_TEpBwmLvHhEx-4RMfSzuWr8",
  authDomain: "chatapp-3324e.firebaseapp.com",
  projectId: "chatapp-3324e",
  storageBucket: "chatapp-3324e.appspot.com",
  messagingSenderId: "146348283364",
  appId: "1:146348283364:web:33940a40c354a5c45de3f1"
};

export const app = initializeApp(firebaseConfig);