import firebase from 'firebase/app';

const config = {
    apiKey: "AIzaSyBGyEJ288XQu1xFE_Ks3kVvAFGFdLFA7m0",
    authDomain: "mr-ndegwa.firebaseapp.com",
    databaseURL: "https://mr-ndegwa.firebaseio.com",
    projectId: "mr-ndegwa",
    storageBucket: "mr-ndegwa.appspot.com",
    messagingSenderId: "448469653864",
    appId: "1:448469653864:web:27f9af643d445fe2f21edd"
};

firebase.initializeApp(config);

export default firebase;
