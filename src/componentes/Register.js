// eslint-disable-next-line import/no-cycle
import { registro } from '../firebase/firebaseAuth.js';
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Register = () => {
  const homeDiv = document.createElement('div');
  const registerDiv = document.createElement('div');
  const titleRegister = document.createElement('p');
  titleRegister.textContent = 'Registro';
  titleRegister.className = 'titleRegister';

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
  btnSubmit.textContent = 'Registrate';
  btnSubmit.id = 'btnsubmit';
  btnSubmit.setAttribute('type', 'submit');

  const btnHome = document.createElement('button');
  btnHome.textContent = 'Home';
  btnHome.className = 'home';

  btnHome.addEventListener('click', () => onNavigate('/'));

  registerDiv.appendChild(titleRegister);
  formRegister.appendChild(inputName);
  formRegister.appendChild(inputEmail);
  formRegister.appendChild(inputPassword);
  formRegister.appendChild(inputPassConfirm);
  formRegister.appendChild(btnSubmit);
  homeDiv.appendChild(registerDiv);
  homeDiv.appendChild(formRegister);
  homeDiv.appendChild(btnHome);

  // eslint-disable-next-line no-undef
  formRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    registro(inputEmail.value, inputPassword.value);
  });

  return homeDiv;
};
