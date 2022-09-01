// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
export const Login = () => {
  const homeDiv = document.createElement('div');
  homeDiv.textContent = 'Login';

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

  btnHome.textContent = 'Home';

  btnHome.addEventListener('click', () => onNavigate('/'));

  formLogin.appendChild(inputEmail);
  formLogin.appendChild(inputPass);
  formLogin.appendChild(btnInit);
  homeDiv.appendChild(formLogin);
  homeDiv.appendChild(btnHome);

  return homeDiv;
};
