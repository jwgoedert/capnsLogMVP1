import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyA8FbDJHu-uYLRchM0lPZ9zvrhY5_5EEkI",
    authDomain: "loglette.firebaseapp.com",
    databaseURL: "https://loglette.firebaseio.com",
    projectId: "loglette",
    storageBucket: "loglette.appspot.com",
    messagingSenderId: "964929081206",
    appId: "1:964929081206:web:7a3653f9923c051c"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase;