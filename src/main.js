/* eslint-disable import/no-cycle */
import { Home } from './componentes/Home.js';
import { Login } from './componentes/Login.js';
import { Register } from './componentes/Register.js';
import { Muro } from './componentes/Muro.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': Home,
  '/register': Register,
  '/login': Login,
  '/muro': Muro,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathname]());
};

const componentes = routes[window.location.pathname];
rootDiv.appendChild(componentes());
