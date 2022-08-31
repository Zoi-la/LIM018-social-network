import { Home } from './componentes/Home.js';
import { Login } from './componentes/Login.js';
import { Register } from './componentes/Register.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': Home,
  '/register': Register,
  '/login': Login,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (rootDiv.firstChild) {
    rootDiv.removeChild(root.firstChild);
  }
  rootDiv.appendChild(routes[pathname]());
};

const componentes = routes[window.location.pathname];

window.onpopstate = () => {
  rootDiv.appendChild(componentes());
}

rootDiv.appendChild(componentes());
