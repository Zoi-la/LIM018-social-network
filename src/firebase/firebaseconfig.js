/* eslint-disable import/no-unresolved */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js';
import { getFirestore, collection, addDoc, getDocs, onSnapshot } from 'https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDc59WL45-i916F9PplVrXFa1JtKJ81fjk',
  authDomain: 'traveltip-5d293.firebaseapp.com',
  projectId: 'traveltip-5d293',
  storageBucket: 'traveltip-5d293.appspot.com',
  messagingSenderId: '891577464768',
  appId: '1:891577464768:web:10b79bb42c36e0ca063a25',
  measurementId: 'G-CYYEFBJ973',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export const createPost = async (user, description) => {
  const createPostCollection = await addDoc(collection(db, 'posts'), {
    description,
    user,
  });
  return createPostCollection;
};

export const getPosts = await getDocs(collection(db, 'posts'));

export const ongetPost = (callback) => onSnapshot(collection(db, 'posts'), callback);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
