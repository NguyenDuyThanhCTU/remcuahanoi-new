import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDI00P4kEkNtq8kRXk6IO5_-UBAWNoumy4",

  authDomain: "cokhiphuongtung-960eb.firebaseapp.com",

  projectId: "cokhiphuongtung-960eb",

  storageBucket: "cokhiphuongtung-960eb.appspot.com",

  messagingSenderId: "135022375051",

  appId: "1:135022375051:web:bd11f8d47ddd1905f2648e",

  measurementId: "G-315FCQD4T0",
};

const app = initializeApp(firebaseConfig);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export const auth = getAuth(app);
