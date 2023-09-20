

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/firestore';

const firebaseConfig = {
 apiKey: "AIzaSyDxwOh4o5qu99MNDgaRs_2YjEyp37b4BZo",
  authDomain: "socialblox-95604.firebaseapp.com",
  projectId: "socialblox-95604",
  storageBucket: "socialblox-95604.appspot.com",
  messagingSenderId: "706303174263",
  appId: "1:706303174263:web:7ae83adc7b7139b5a40872",
  measurementId: "G-N71LJNRKCZ"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export {firebase};