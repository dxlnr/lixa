import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';

import './index.css';
import App from './App';
// import { Auth0Provider } from "./components/auth0-solidjs";
import Auth0ProviderWithNavigation from "./auth0-provider";

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error('Root element not found.');
}

render(
  () => (
    <Router>
      <Auth0ProviderWithNavigation>
        <App />
      </Auth0ProviderWithNavigation>
    </Router>
  ),
  root!
);
