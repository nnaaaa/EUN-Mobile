import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDF8OJgKBKAX7CvuZprjUFcpoIQasfZx3w",
    authDomain: "facebook-14d06.firebaseapp.com",
    databaseURL: "https://facebook-14d06-default-rtdb.firebaseio.com",
    projectId: "facebook-14d06",
    storageBucket: "facebook-14d06.appspot.com",
    messagingSenderId: "576377359602",
    appId: "1:576377359602:web:8ecb619a2d5f3327c8146b",
    measurementId: "G-JNXHH4JHH1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();


export { db, auth };
export default firebase;