import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';

import './index.css';
import App from './App';
import { Auth0 } from './components/solid-auth0';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error('Root element not found.');
}

const domain = import.meta.env.VITE_APP_AUTH0_DOMAIN
const clientId = import.meta.env.VITE_APP_AUTH0_CLIENT_ID

render(
  () => (
    <Auth0
      domain={domain}
      clientId={clientId}
      loginRedirectUri={`${window.location.origin}/`}
      logoutRedirectUri={`${window.location.origin}/logout`}
    >
      <Router>
        <App />
      </Router>
    </Auth0>
  ),
  root!
);
