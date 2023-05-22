import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBMLLbj09IxQOez5cTlmApwZMSi_qyJfHc",
  authDomain: "montem-d8829.firebaseapp.com",
  databaseURL: "https://montem-d8829-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "montem-d8829",
  storageBucket: "montem-d8829.appspot.com",
  messagingSenderId: "496898410589",
  appId: "1:496898410589:web:6b68e67278d86b71c0e5b4",
  measurementId: "G-QQ5SSKR29X"
};
let firebaseApp = initializeApp(firebaseConfig);
getDatabase(firebaseApp);
getAuth(firebaseApp);
