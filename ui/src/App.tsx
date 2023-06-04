import { Component, lazy } from 'solid-js';
import { Routes, Route } from '@solidjs/router';

import { useAuth0 } from "./components/auth0-solidjs";
import AuthenticationGuard from "./components/guards/authGuard";

const Home = lazy(() => import('./routes/home'));
const Login = lazy(() => import('./routes/login'));
const Callback = lazy(() => import('./routes/callback'));
const Copilot = lazy(() => import('./routes/copilot'));
const Collection = lazy(() => import('./routes/collection'));
const Brand = lazy(() => import('./routes/brand'));
const CreateBrand = lazy(() => import('./routes/createBrand'));


const App: Component = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div>
        test
      </div>
    );
  }

  return (
    <div>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/copilot" component={<AuthenticationGuard component={Copilot} />} />
        <Route path="/collection" component={<AuthenticationGuard component={Collection} />} />
        <Route path="/brand" component={<AuthenticationGuard component={Brand} />} />
        <Route path="/newbrand" component={<AuthenticationGuard component={CreateBrand} />} />
        <Route path="/callback" component={Callback} />
      </Routes>
    </div>
  );
};

export default App;
