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

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const createUserProfileDocument = async (userAuth, additionalInfo) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (snapShot.empty) {
    console.log("No Matching Documents.");
    return;
  }

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
  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, documentsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  documentsToAdd.forEach(document => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, document);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const {title, items} = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });
  
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});

export default firebase;