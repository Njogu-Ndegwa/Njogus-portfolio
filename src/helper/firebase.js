import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/functions';
import 'firebase/auth'
import 'firebase/firestore';
import Axios from 'axios'

const firebaseConfig = {
  apiKey: "AIzaSyBGyEJ288XQu1xFE_Ks3kVvAFGFdLFA7m0",
  authDomain: "mr-ndegwa.firebaseapp.com",
  databaseURL: "https://mr-ndegwa.firebaseio.com",
  projectId: "mr-ndegwa",
  storageBucket: "mr-ndegwa.appspot.com",
  messagingSenderId: "448469653864",
  appId: "1:448469653864:web:27f9af643d445fe2f21edd"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export {Axios, db}

export default firebase;
