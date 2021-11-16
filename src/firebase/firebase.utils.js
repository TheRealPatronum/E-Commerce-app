import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyAHhQDsOPVy5U0F2xuEuhL20nUsBv1y_ig',
  authDomain: 'e-commerce-app-f42a3.firebaseapp.com',
  projectId: 'e-commerce-app-f42a3',
  storageBucket: 'e-commerce-app-f42a3.appspot.com',
  messagingSenderId: '156066700552',
  appId: '1:156066700552:web:feba87b1795a8440cee0bd',
  measurementId: 'G-3HQ9ZF569Q',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
