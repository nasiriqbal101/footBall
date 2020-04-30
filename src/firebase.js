
import firebase from "firebase";


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAz20LMzKYMm7hoVSfiXQWPaBV6NFpovss",
    authDomain: "football-240c4.firebaseapp.com",
    databaseURL: "https://football-240c4.firebaseio.com",
    projectId: "football-240c4",
    storageBucket: "football-240c4.appspot.com",
    messagingSenderId: "852566777651",
    appId: "1:852566777651:web:844fc24b0b32e393b26846"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const providers = {
    google: new firebase.auth.GoogleAuthProvider(),
    // facebook: new firebase.auth.GoogleAuthProvider()
}


export const firestore = firebase.firestore();

export default firebase;