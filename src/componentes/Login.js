// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
export const Login = () => {
  const homeDiv = document.createElement('div');
  homeDiv.textContent = 'Bienvenido al Login';
  const btnHome = document.createElement('button');

  btnHome.textContent = 'Regresar al Home';

  btnHome.addEventListener('click', () => onNavigate('/'));

  homeDiv.appendChild(btnHome);

  return homeDiv;
};
