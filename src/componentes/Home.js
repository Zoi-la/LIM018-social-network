// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Home = () => {
  const homeDiv = document.createElement('div');
  const btnRegister = document.createElement('button');
  const btnLogin = document.createElement('button');
  const logoDiv = document.createElement('div');
  const logo = new Image();
  const container = document.createElement('div');
  const title = document.createElement('div');
  const nombre = document.createElement('p');

  container.className = 'divBoton';
  nombre.textContent = 'TravelTip';
  title.className = 'title';
  btnRegister.textContent = 'Registrate';
  btnRegister.id = 'register';
  btnLogin.textContent = 'Iniciar sesión';
  btnLogin.id = 'login';
  logo.src = './imagenes/TravelTip.png';
  logo.id = 'logo';

  btnRegister.addEventListener('click', () => onNavigate('/register'));
  btnLogin.addEventListener('click', () => onNavigate('/login'));

  logoDiv.appendChild(logo);
  homeDiv.appendChild(logoDiv);
  homeDiv.appendChild(title);
  title.appendChild(nombre);
  container.appendChild(btnRegister);
  container.appendChild(btnLogin);
  homeDiv.appendChild(container);
 

  return homeDiv;
};
