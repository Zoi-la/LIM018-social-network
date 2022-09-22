// eslint-disable-next-line import/no-cycle
import { inicioDeSesion } from '../firebase/firebaseAuth.js';
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Login = () => {
  const homeDiv = document.createElement('div');
  const loginDiv = document.createElement('div');
  const titleLogin = document.createElement('p');
  titleLogin.textContent = 'Login';
  titleLogin.className = 'titleLogin';

  const formLogin = document.createElement('form');
  formLogin.className = 'formLogin';

  const inputEmail = document.createElement('input');
  inputEmail.type = 'email';
  inputEmail.placeholder = 'Ingresa tu correo';

  const inputPass = document.createElement('input');
  inputPass.type = 'password';
  inputPass.placeholder = 'Ingresa tu contraseña';

  const btnInit = document.createElement('button');
  btnInit.textContent = 'Iniciar sesión';
  btnInit.id = 'btninit';
  btnInit.setAttribute('type', 'submit');

  const btnHome = document.createElement('button');
  btnHome.className = 'homeLog';
  btnHome.textContent = 'Home';

  btnHome.addEventListener('click', () => onNavigate('/'));

  loginDiv.appendChild(titleLogin);
  formLogin.appendChild(inputEmail);
  formLogin.appendChild(inputPass);
  formLogin.appendChild(btnInit);
  homeDiv.appendChild(loginDiv);
  homeDiv.appendChild(formLogin);
  homeDiv.appendChild(btnHome);

  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = inputEmail.value;
    const password = inputPass.value;
    inicioDeSesion(email, password);
  });

  return homeDiv;
};
