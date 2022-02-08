import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config =  {
    apiKey: "AIzaSyCA9r0mmqUQ566orymfuKk4_Ce9CCK0OiE",
    authDomain: "crwn-clothing-db-c479f.firebaseapp.com",
    projectId: "crwn-clothing-db-c479f",
    storageBucket: "crwn-clothing-db-c479f.appspot.com",
    messagingSenderId: "92011007969",
    appId: "1:92011007969:web:e7d87400495cdb12024ca0",
    measurementId: "G-SF5YK1EYJN"
  };

// Initialize Firebase
const app = firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const createUserProfileDocument = async (userAuth, additionalInfo) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalInfo
      });
    }
    catch(error) {
      console.log("Error Creating The User", error.message);
    }
  }

  return userAuth;
}

export default firebase;