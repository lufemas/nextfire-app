import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCfEwrtI2nlx_lMuBu0NOQa3TC9W0-8ZGA",
  authDomain: "nextfire-4aa65.firebaseapp.com",
  projectId: "nextfire-4aa65",
  storageBucket: "nextfire-4aa65.appspot.com",
  messagingSenderId: "966417312524",
  appId: "1:966417312524:web:999f200f84f790e9b7f729",
  measurementId: "G-W1YKZVQV1P"
};

if (!firebase.getApps().length){
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storages = firebase.storages();