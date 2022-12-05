
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBfRR6xnIqWhEKantVdI6-jbo4ZbrhnpLY",
  authDomain: "devlinks-6b700.firebaseapp.com",
  projectId: "devlinks-6b700",
  storageBucket: "devlinks-6b700.appspot.com",
  messagingSenderId: "807144474192",
  appId: "1:807144474192:web:d2e42069a9fb4048ddf355",
  measurementId: "G-T5FF6W8VFH",
};

const firebasApp = initializeApp(firebaseConfig)

const db = getFirestore(firebasApp)
const auth = getAuth(firebasApp)

export {db, auth};

