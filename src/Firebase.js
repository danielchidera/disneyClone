import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore,
collection,
getDoc,
doc,
addDoc,
setDoc,
updateDoc
 } from 'firebase/firestore';
import {  getStorage  } from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyD8hgmnVy5WfxTDSBSkzO3-Krr28ywt-kQ",
  authDomain: "disney-clone-93ee4.firebaseapp.com",
  projectId: "disney-clone-93ee4",
  storageBucket: "disney-clone-93ee4.appspot.com",
  messagingSenderId: "930872683772",
  appId: "1:930872683772:web:358c1e6397e6e6eedbbb79",
  measurementId: "G-T74ESMXMCL"
};



const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);


export { auth, provider, storage, };
export default db; 
