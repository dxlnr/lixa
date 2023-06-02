import { Component, lazy } from 'solid-js';
import { Routes, Route } from '@solidjs/router';

const Home = lazy(() => import('./routes/home'));
const Login = lazy(() => import('./routes/login'));
const Callback = lazy(() => import('./routes/callback'));
const Copilot = lazy(() => import('./routes/copilot'));
const Collection = lazy(() => import('./routes/collection'));
const Brand = lazy(() => import('./routes/brand'));
const CreateBrand = lazy(() => import('./routes/createBrand'));

const App: Component = () => {
  return (
    <div>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/copilot" component={Copilot} />
        <Route path="/collection" component={Collection} />
        <Route path="/brand" component={Brand} />
        <Route path="/newbrand" component={CreateBrand} />
        <Route path="/callback" component={Callback} />
      </Routes>
    </div>
  );
};

export default App;
