// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

const firebaseApp = initializeApp(firebaseConfig);
export const database = getDatabase(firebaseApp);
export const fireAuth = getAuth(firebaseApp);

// signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//         // Signed in 
//         const user = userCredential.user;
//         // ...
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//     });
