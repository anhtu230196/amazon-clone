import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDsFP-DSQSajTl0WjCqKGmechtgoirRyUc",
  authDomain: "clone-12d28.firebaseapp.com",
  projectId: "clone-12d28",
  storageBucket: "clone-12d28.appspot.com",
  messagingSenderId: "133784623072",
  appId: "1:133784623072:web:7865ed803efe611374bd85",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
