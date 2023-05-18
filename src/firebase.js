import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzhEXIRf4iiH7aqqR0HXl1S2DSn4EN0DI",
  authDomain: "todo-app-359a5.firebaseapp.com",
  projectId: "todo-app-359a5",
  storageBucket: "todo-app-359a5.appspot.com",
  messagingSenderId: "414378494405",
  appId: "1:414378494405:web:7f139f4582d522af25e3ac"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
