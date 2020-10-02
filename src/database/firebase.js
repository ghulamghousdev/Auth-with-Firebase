import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyAJjx6m6ANBLbC34SY0QHgPKgtd5xA0oJM",
  authDomain: "chat-71254.firebaseapp.com",
  databaseURL: "https://chat-71254.firebaseio.com",
  projectId: "chat-71254",
  storageBucket: "chat-71254.appspot.com",
  messagingSenderId: "284037426246",
  appId: "1:284037426246:web:1aa45599b58db09bd2ae47",
  measurementId: "G-ZRJGDCCKF1",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
