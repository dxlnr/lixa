import { Component, JSX } from 'solid-js';
import { Auth0 } from './components/solid-auth0';

type Auth0ProviderProps = {
  children?: JSX.Element;
};

export const Auth0Provider: Component<Auth0ProviderProps> = (props) => {

  const domain = import.meta.env.VITE_APP_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_APP_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_APP_AUTH0_CALLBACK_URL;
  const audience = import.meta.env.VITE_APP_AUTH0_AUDIENCE;

  if (!(domain && clientId && redirectUri && audience)) {
    return null;
  }

  return (
    <Auth0
      domain={domain}
      clientId={clientId}
      audience={audience}
      logoutRedirectUri={`${window.location.origin}/`}
      // loginRedirectUri={`${window.location.origin}/`}
      loginRedirectUri={redirectUri}
    >
      {props.children}
    </Auth0>
  );
};
