  import firebase from 'firebase'
  import firestore from 'firebase/firestore'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCgTROQgaF4bHR5NnkX-orpkLFIaoyKZpk",
    authDomain: "udemy-geo-ninjas-fd4f0.firebaseapp.com",
    databaseURL: "https://udemy-geo-ninjas-fd4f0.firebaseio.com",
    projectId: "udemy-geo-ninjas-fd4f0",
    storageBucket: "",
    messagingSenderId: "854949274291"
  };
  const firebaseApp = firebase.initializeApp(config);

  export default firebaseApp.firestore();