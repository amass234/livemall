import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyChbJgCr42E0p1v_l771Ssm6fux_bVKF_k",
  authDomain: "livemall-a1858.firebaseapp.com",
  databaseURL: "https://livemall-a1858.firebaseio.com",
  projectId: "livemall-a1858",
  storageBucket: "",
  messagingSenderId: "855190678141"
};

const Firebase = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

export default Firebase