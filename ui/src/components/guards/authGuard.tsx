import { withAuthRequired } from '../auth0-solidjs';

const AuthenticationGuard = ({ component }) => {
  const Component = withAuthRequired(component, {
    onRedirecting: () => <div>test</div>,
  });

  return <Component />;
};

export default AuthenticationGuard;
