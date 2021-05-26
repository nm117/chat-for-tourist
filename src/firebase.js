import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyCD-O4afRyQC2sifIAVdfXp6YPcjlaXcH4",
  authDomain: "vue-chat-tourist.firebaseapp.com",
  databaseURL: "https://vue-chat-tourist.firebaseio.com",
  projectId: "vue-chat-tourist",
  storageBucket: "vue-chat-tourist.appspot.com",
  messagingSenderId: "210600491982",
  appId: "1:210600491982:web:97a6673a97768222a7c99f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

export default firebase