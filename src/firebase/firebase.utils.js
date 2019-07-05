import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCJ7uafPGSFjzFkAxJd7Foua3yqewQrsrE',
  authDomain: 'crwn-db-f8723.firebaseapp.com',
  databaseURL: 'https://crwn-db-f8723.firebaseio.com',
  projectId: 'crwn-db-f8723',
  storageBucket: '',
  messagingSenderId: '959231909936',
  appId: '1:959231909936:web:401804c5bffc4ef5',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
