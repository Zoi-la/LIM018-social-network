// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Register = () => {
  const homeDiv = document.createElement('div');
  homeDiv.textContent = 'Registro';

  const formRegister = document.createElement('form');
  formRegister.className = 'formRegister';

  const inputName = document.createElement('input');
  inputName.type = 'text';
  inputName.placeholder = 'Ingresa tu nombre';

  const inputEmail = document.createElement('input');
  inputEmail.type = 'email';
  inputEmail.placeholder = 'Ingresa tu correo';

  const inputPassword = document.createElement('input');
  inputPassword.type = 'password';
  inputPassword.placeholder = 'Crea tu contraseña';

  const inputPassConfirm = document.createElement('input');
  inputPassConfirm.type = 'password';
  inputPassConfirm.placeholder = 'Confirma tu contraseña';

  const btnSubmit = document.createElement('button');
  btnSubmit.textContent = 'Registrarte';
  btnSubmit.id = 'btnsubmit';
  btnSubmit.setAttribute('type', 'submit');

  const btnHome = document.createElement('button');
  btnHome.textContent = 'Home';

  btnHome.addEventListener('click', () => onNavigate('/'));

  formRegister.appendChild(inputName);
  formRegister.appendChild(inputEmail);
  formRegister.appendChild(inputPassword);
  formRegister.appendChild(inputPassConfirm);
  formRegister.appendChild(btnSubmit);
  homeDiv.appendChild(formRegister);
  homeDiv.appendChild(btnHome);

  return homeDiv;
};
