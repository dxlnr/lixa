import { Component, JSX } from 'solid-js';
import { Auth0Provider } from './components/auth0-solidjs';
import { useNavigate } from '@solidjs/router';

type Auth0ProviderProps = {
  children?: JSX.Element;
};

const Auth0ProviderWithNavigate: Component<Auth0ProviderProps> = (props) => {
  // const navigate = useNavigate();

  const domain = import.meta.env.VITE_APP_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_APP_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_APP_AUTH0_CALLBACK_URL;
  const audience = import.meta.env.VITE_APP_AUTH0_AUDIENCE;

  if (!(domain && clientId && redirectUri && audience)) {
    return null;
  }

  //   const onRedirectCallback = (appState) => {
  //     navigate(appState?.returnTo || window.location.pathname);
  //   };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        audience: audience,
        scope: 'openid profile email',
        redirect_uri: redirectUri,
      }}
    >
      {props.children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
