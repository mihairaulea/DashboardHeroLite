import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

// PUT IN YOUR CONFIG HERE, AND SHARE ACCESS TO YOUR PROJECT
var config = {
    apiKey: "AIzaSyCH6KQHxbmqSTvSnzXvkjDbxvvwxJk0xa8",
    authDomain: "aggero-ccdae.firebaseapp.com",
    databaseURL: "https://aggero-ccdae.firebaseio.com",
    projectId: "aggero-ccdae",
    storageBucket: "aggero-ccdae.appspot.com",
    messagingSenderId: "749293303051"
  };

let app = firebase.initializeApp(config);
let db = app.firestore();

async function getInfluencers(influencerSearchParams) {
  const querySnapshot = await db.collection("influencers_7iU5kt8Hr5fyyrkLSS5foBcloEn2").get().then((snapshot) => {
    return snapshot.docs.map(doc => doc.data());
  });
  return querySnapshot;
}

export default getInfluencers;
