import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';
// import { Auth0 } from '@rturnq/solid-auth0';

import './index.css';
import App from './App';
import { Auth0 } from './components/solid-auth0';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error('Root element not found.');
}

const domain = import.meta.env.VITE_APP_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_APP_AUTH0_CLIENT_ID;

render(
  () => (
    <Router>
      <Auth0
        domain={domain}
        clientId={clientId}
        logoutRedirectUri={`${window.location.origin}/logout`}
        loginRedirectUri={`${window.location.origin}/`}
      >
        <App />
      </Auth0>
    </Router>
  ),
  root!
);
