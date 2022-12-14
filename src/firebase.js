import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnMqXMN2MTT2WXrDJqjb1I1Vnuk-jDuHg",
  authDomain: "whatsapp-clone-82b81.firebaseapp.com",
  projectId: "whatsapp-clone-82b81",
  storageBucket: "whatsapp-clone-82b81.appspot.com",
  messagingSenderId: "766881877520",
  appId: "1:766881877520:web:c96a66f42c5f7dafcd8495",
  measurementId: "G-PTDEGKN9GG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
