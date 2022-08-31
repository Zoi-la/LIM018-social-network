// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Register = () => {
  const homeDiv = document.createElement('div');
  homeDiv.textContent = 'Bienvenido al registro';
  const btnHome = document.createElement('button');

  btnHome.addEventListener('click', () => onNavigate('/'));
  btnHome.textContent = 'Regresar al Home';

  homeDiv.appendChild(btnHome);

  return homeDiv;
};
