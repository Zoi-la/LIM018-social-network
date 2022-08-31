// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Home = () => {
  const homeDiv = document.createElement('div');
  const btnRegister = document.createElement('button');
  const btnLogin = document.createElement('button');

  btnRegister.textContent = 'Registrate';
  btnLogin.textContent = 'Inicia sesión';

  btnRegister.addEventListener('click', () => onNavigate('/register'));
  btnLogin.addEventListener('click', () => onNavigate('/login'));

  homeDiv.appendChild(btnRegister);
  homeDiv.appendChild(btnLogin);

  return homeDiv;
};
