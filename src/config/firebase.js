
import { initializeApp } from "firebase/app";
import { initializeAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBqhGoMSS5qAypwC5NFU83T5TknMDUljJk",
    authDomain: "pxdesigne.firebaseapp.com",
    projectId: "pxdesigne",
    storageBucket: "pxdesigne.appspot.com",
    messagingSenderId: "567214776306",
    appId: "1:567214776306:web:f3e090cbbff7255199156b",
    measurementId: "G-GXK2F1LNBE"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, auth, storage }


