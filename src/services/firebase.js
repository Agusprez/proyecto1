import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDvJsiNFeG1n9m5pFmr9PDaxD6V78zVLE4",
  authDomain: "irutrekk-sanpedro.firebaseapp.com",
  databaseURL: "https://irutrekk-sanpedro.firebaseio.com",
  projectId: "irutrekk-sanpedro",
  storageBucket: "irutrekk-sanpedro.appspot.com",
  messagingSenderId: "678307657800",
  appId: "1:678307657800:web:52bd11b9a3562a83ba007d",
  measurementId: "G-2QX551YY7R"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();
firebase.db = db;

export default firebase;