import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAKsCTnJ6Mg9A9xYCUjM_UurJLXb6byauQ",
    authDomain: "crwn-db-901e4.firebaseapp.com",
    databaseURL: "https://crwn-db-901e4.firebaseio.com",
    projectId: "crwn-db-901e4",
    storageBucket: "",
    messagingSenderId: "921152103098",
    appId: "1:921152103098:web:fed027d85085f752"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;