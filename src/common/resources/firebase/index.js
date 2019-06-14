import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyCYAKG5MlCPtAuaVL11VBwLfp9VmvzSikM",
  authDomain: "dashboardhero-c056c.firebaseapp.com",
  databaseURL: "https://dashboardhero-c056c.firebaseio.com",
  projectId: "dashboardhero-c056c",
  storageBucket: "",
  messagingSenderId: "144870749459",
  appId: "1:144870749459:web:953a27dc1900061d"
};

class FirebaseClass {

  constructor() {
   this.app = firebase.initializeApp(config);
   this.db = firebase.firestore();
   this.auth = this.app.auth();
   this.isLoaded = false;
 }

  getCurrentUserId() {
    return this.app.auth().currentUser;
  }
  // New user registration with Email + Password

  createUserWithCredentials(email, password) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  };

  // Authentication

  signInWithCredentials(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  };
/*
  // Authentication Google

  signInWithGoogle = () => {
    const provider = new app.auth.GoogleAuthProvider();
    // provider.addScope('https://www.googleapis.com/auth/gmail.compose');
    return this.auth.signInWithPopup(provider);
  };

  // Authentication Facebook

  signInWithFacebook = () => {
    const provider = new app.auth.FacebookAuthProvider();
    // provider.addScope('email');
    // provider.addScope('ads_management');
    return this.auth.signInWithPopup(provider);
  };

  // User sign out

  signout = () => this.auth.signOut();

  // Password reset

  passwordReset = email => this.auth.sendPasswordResetEmail(email);

  // Create new user record

  addUser = (userId, displayName, email, photoURL) => {
    const cloudFunc = this.functions.httpsCallable('addUser');
    return cloudFunc({
      userId, displayName, email, photoURL,
    });
  };*/

}

const firebaseInstance = new FirebaseClass();
export default firebaseInstance;
