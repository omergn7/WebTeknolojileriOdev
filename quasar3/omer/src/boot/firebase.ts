import firebase from 'firebase/app';
import { boot } from 'quasar/wrappers';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAhbjTwxcqt9P5WQgOlf8V1fsKvMM1RSYY",
  authDomain: "web2024odev.firebaseapp.com",
  projectId: "web2024odev",
  storageBucket: "web2024odev.appspot.com",
  messagingSenderId: "923751114999",
  appId: "1:923751114999:web:433551e827f8b2d4848bf2"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const firestore = getFirestore(app);

export default boot(({ app }) => {
  app.config.globalProperties.$db = db;
});
export const auth = getAuth(app);
export { db };

