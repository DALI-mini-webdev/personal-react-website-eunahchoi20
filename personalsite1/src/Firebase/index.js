
import firebase from 'firebase';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyATOiuEeTkdNh-PMI2NZvpFEanO1PR5fw4",
  authDomain: "icecreamposting.firebaseapp.com",
  projectId: "icecreamposting",
  storageBucket: "icecreamposting.appspot.com",
  messagingSenderId: "744060486581",
  appId: "1:744060486581:web:67fcecc12264cb258ccffc",
  measurementId: "G-QPLV4JJLML"
});

const db = firebase.firestore();


export default {
  firebase, db
}