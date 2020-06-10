import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/functions';

const firebaseConfig = {
  apiKey: 'AIzaSyD_uOpjU0Mk8RhfOOTDo1KXFiaUqz2Z2ho',
  authDomain: 'bryce-portfolio.firebaseapp.com',
  databaseURL: 'https://bryce-portfolio.firebaseio.com',
  projectId: 'bryce-portfolio',
  storageBucket: 'bryce-portfolio.appspot.com',
  messagingSenderId: '926414773612',
  appId: '1:926414773612:web:acd90adee8089cea7a6749'
};

firebase.initializeApp(firebaseConfig);

export default firebase;
