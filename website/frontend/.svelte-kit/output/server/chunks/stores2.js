import { r as readable, w as writable } from "./index.js";
import { getDatabase } from "firebase/database";
import "set-interval-async";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";
function guard(name) {
  return () => {
    throw new Error(`Cannot call ${name}(...) on the server`);
  };
}
const goto = guard("goto");
readable("context-id-1");
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
const initDatabase = getDatabase(firebaseApp);
readable(initDatabase);
class FireAuth_Handler {
  userCredentials;
  user;
  // email and password are binded to value of input fields at root page
  userEmail;
  password;
  fireAuth;
  unsubscribeAuthStateChange;
  constructor() {
    this.fireAuth = getAuth(firebaseApp);
  }
  async signIn(errorHandler) {
    console.log("hejhej");
    if (await this.inputsAreEmpty()) {
      return;
    }
    if (!this.validEmail()) {
      errorHandler();
      console.log("Input email not valid");
      return;
    }
    try {
      this.userCredentials = await signInWithEmailAndPassword(
        this.fireAuth,
        this.userEmail,
        this.password
      );
      console.log("har loggat in:");
      console.log(this);
    } catch (e) {
      errorHandler();
      console.log(e);
    }
    this.unsubscribeAuthStateChange = onAuthStateChanged(this.fireAuth, (user) => {
      if (user) {
        goto("/home");
      } else {
        goto("/");
      }
    });
  }
  async signOut() {
    try {
      let response = await signOut(this.fireAuth);
      goto("/");
    } catch (e) {
      console.log(e);
    }
  }
  async signUp(errorHandler) {
    console.log("signUp");
    if (await this.inputsAreEmpty()) {
      return;
    }
    if (!this.validEmail()) {
      errorHandler();
      console.log("not valid!");
      return;
    }
    try {
      let userCredentials = await createUserWithEmailAndPassword(
        this.fireAuth,
        this.userEmail,
        this.password
      );
      console.log(userCredentials);
    } catch (e) {
      console.log(e);
    }
  }
  async inputsAreEmpty() {
    if (this.userEmail === "" || this.password === "") {
      return true;
    }
    return false;
  }
  async validEmail() {
    if (String(this.userEmail).toLowerCase().match(
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    ) === null) {
      return false;
    }
    return true;
  }
  setEmail(userEmail) {
    this.userEmail = userEmail;
  }
  setPassword(password) {
    this.password = password;
  }
}
let initHandler = new FireAuth_Handler();
const authHandler = writable(initHandler);
export {
  authHandler as a
};
