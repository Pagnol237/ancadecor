import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCUiUJh37W--7XF2x7oMZVrlRQLcZceRzM",
  authDomain: "ancadecor-61358.firebaseapp.com",
  projectId: "ancadecor-61358",
  storageBucket: "ancadecor-61358.appspot.com",
  messagingSenderId: "222620329897",
  appId: "1:222620329897:web:c564cb5773832e0b4c46b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
