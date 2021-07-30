import firebase from "firebase/app";
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    // console.log(snapShot);

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try { // set data to database
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;