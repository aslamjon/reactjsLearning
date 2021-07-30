import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDKCL-Et20U6-pU6z37g6KRD42MFIXfDVs",
    authDomain: "crwn-db-d9ec3.firebaseapp.com",
    projectId: "crwn-db-d9ec3",
    storageBucket: "crwn-db-d9ec3.appspot.com",
    messagingSenderId: "667453401565",
    appId: "1:667453401565:web:24c85850ff74a44d966e34",
    measurementId: "G-9NF1T07C09"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;