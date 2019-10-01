import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    // apiKey: "AIzaSyA8FbDJHu-uYLRchM0lPZ9zvrhY5_5EEkI",
    // authDomain: "loglette.firebaseapp.com",
    // databaseURL: "https://loglette.firebaseio.com",
    // projectId: "loglette",
    // storageBucket: "loglette.appspot.com",
    // messagingSenderId: "964929081206",
    // appId: "1:964929081206:web:7a3653f9923c051c"
    apiKey: "AIzaSyAQZX0mb1aAaorpv13nqLGbS_BPxtzbUdo",
    authDomain: "sandbox-f57a2.firebaseapp.com",
    databaseURL: "https://sandbox-f57a2.firebaseio.com",
    projectId: "sandbox-f57a2",
    storageBucket: "sandbox-f57a2.appspot.com",
    messagingSenderId: "1000499227855",
    appId: "1:1000499227855:web:d4cf54d4fb0573af969bba"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase;
