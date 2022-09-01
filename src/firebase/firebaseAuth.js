// eslint-disable-next-line import/named
import { auth, createUserWithEmailAndPassword } from './firebaseconfig.js';
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
    });
};
