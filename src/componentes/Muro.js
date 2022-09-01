// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Muro = () => {
  const homeDiv = document.createElement('div');
  homeDiv.textContent = 'Publicaciones';

  const btnHome = document.createElement('button');

  btnHome.textContent = 'Home';

  btnHome.addEventListener('click', () => onNavigate('/'));

  homeDiv.appendChild(btnHome);

  return homeDiv;
};
