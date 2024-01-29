import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA-1jJYmd_Mv13aWPXDnxse88SHUh2VUwE",
  authDomain: "dropbox-clone-bceee.firebaseapp.com",
  projectId: "dropbox-clone-bceee",
  storageBucket: "dropbox-clone-bceee.appspot.com",
  messagingSenderId: "616903547454",
  appId: "1:616903547454:web:1e4712c9faffa4e6978f6f",
  measurementId: "G-0P17S3D0RK",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
