import { withAuthRequired } from '../auth0-solidjs';

import PageLoader from '../utils/pageloader';

const AuthenticationGuard = ({ component }) => {
  const Component = withAuthRequired(component, {
    onRedirecting: () => (
      <div>
        <PageLoader />
      </div>
    ),
  });

  return <Component />;
};

export default AuthenticationGuard;
