import { Component, lazy } from 'solid-js';
import { Routes, Route } from '@solidjs/router';

import { useAuth0 } from './components/auth0-solidjs';
import AuthenticationGuard from './components/guards/authGuard';
import PageLoader from './components/utils/pageloader';

const Home = lazy(() => import('./routes/home'));
const Account = lazy(() => import('./routes/account'));
const Login = lazy(() => import('./routes/login'));
const Copilot = lazy(() => import('./routes/copilot'));
const Collection = lazy(() => import('./routes/collection'));
const Brand = lazy(() => import('./routes/brand'));
const CreateBrand = lazy(() => import('./routes/createBrand'));

const App: Component = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div>
        <PageLoader />
      </div>
    );
  }

  return (
    <div>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route
          path="/copilot"
          element={<AuthenticationGuard component={Copilot} />}
        />
        <Route
          path="/collection"
          element={<AuthenticationGuard component={Collection} />}
        />
        <Route
          path="/brand"
          element={<AuthenticationGuard component={Brand} />}
        />
        <Route
          path="/brand/new"
          element={<AuthenticationGuard component={CreateBrand} />}
        />
        <Route path="/account"  
          element={<AuthenticationGuard component={Account} />}
        />
      </Routes>
    </div>
  );
};

export default App;
