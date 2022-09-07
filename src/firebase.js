import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyDv2tqdcUeLlFy9egSKCRbkNWzDcKQB9PI",
    authDomain: "cloneinstagram-2e0f3.firebaseapp.com",
    projectId: "cloneinstagram-2e0f3",
    storageBucket: "cloneinstagram-2e0f3.appspot.com",
    messagingSenderId: "411760376696",
    appId: "1:411760376696:web:c9725bdd8eef6361fe668d",
    measurementId: "G-DLPH1L7WZT"
});



const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage().ref();
//const functions = firebase.functions(); //

export {db,auth,storage};