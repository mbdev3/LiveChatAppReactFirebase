// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB9xRYrz7oPhCJtU4_pUiHDCopy8FBvwvs',
  authDomain: 'chat-app-82d9b.firebaseapp.com',
  projectId: 'chat-app-82d9b',
  storageBucket: 'chat-app-82d9b.appspot.com',
  messagingSenderId: '510472686267',
  appId: '1:510472686267:web:455567c203ee8c8701779e',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
