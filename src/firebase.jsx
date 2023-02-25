import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAiP6FDk6PQR3ikjo18pqxUupnTFZ5BMpM",
  authDomain: "tomotomo-line.firebaseapp.com",
  projectId: "tomotomo-line",
  storageBucket: "tomotomo-line.appspot.com",
  messagingSenderId: "919902558040",
  appId: "1:919902558040:web:a778845fde68f7520d372d"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, provider, db, storage }