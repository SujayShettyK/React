import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCtiRUfqnmKHFobXKW37XQKXBX3V_CntYQ",
  authDomain: "crwn-db-90b60.firebaseapp.com",
  databaseURL: "https://crwn-db-90b60.firebaseio.com",
  projectId: "crwn-db-90b60",
  storageBucket: "crwn-db-90b60.appspot.com",
  messagingSenderId: "130292416248",
  appId: "1:130292416248:web:dd676bb7e410cb7d7c850d",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
