import { Component, lazy } from 'solid-js';
import { Routes, Route } from '@solidjs/router';

const Home = lazy(() => import('./routes/home'));
const Login = lazy(() => import('./routes/login'));
const Account = lazy(() => import('./routes/account'));
const Collections = lazy(() => import('./routes/collections'));
const Brand = lazy(() => import('./routes/brand'));

const App: Component = () => {
  return (
    <div>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/account" component={Account} />
        <Route path="/collections" component={Collections} />
        <Route path="/brand" component={Brand} />
      </Routes>
    </div>
  );
};

export default App;
