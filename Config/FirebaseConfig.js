import firebase from "firebase";

/**
 * This file contains access to firebase authentication and other services.
 *
 *  Firebase version `8.10.0` is used.
 */

 const firebaseConfig = {
  apiKey: "AIzaSyDbAli7svuIXkNf2da3VijHEMk1CcN3Y-M",
  authDomain: "whatsapp-f994e.firebaseapp.com",
  projectId: "whatsapp-f994e",
  storageBucket: "whatsapp-f994e.appspot.com",
  messagingSenderId: "15638845700",
  appId: "1:15638845700:web:b5a3496703b73afca2d851",
  measurementId: "G-DRVVN50W52"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

/**
 * `db` provides access to firebase firestore database services.
 *
 * Firebase version `8.10.0` is used.
 *
 * @see https://www.npmjs.com/package/firebase/v/8.10.1
 */
const db = app.firestore();
/**
 * `auth` provides access to firebase authentication services.
 *
 *  Firebase version `8.10.0` is used.
 *
 * @see https://www.npmjs.com/package/firebase/v/8.10.1
 */
const auth = app.auth();
/**
 * `provider` provides access to Google authentication granter services.
 *
 *  Firebase version `8.10.0` is used.
 *
 * @see https://www.npmjs.com/package/firebase/v/8.10.1
 */
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
