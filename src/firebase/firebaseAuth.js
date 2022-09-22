// eslint-disable-next-line import/named, import/no-unresolved
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../firebase/firebaseConfig.js';
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const registro = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      if (user) {
        onNavigate('/login');
      }
    })
    .catch ((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

export const inicioDeSesion = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Login
      const user = userCredential.user;
      if (user) {
        onNavigate('/muro');
      }
    })
    .catch ((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};
