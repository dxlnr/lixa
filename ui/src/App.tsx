import { Component, lazy } from 'solid-js';
import { Routes, Route } from '@solidjs/router';

const Home = lazy(() => import('./routes/home'));
const Login = lazy(() => import('./routes/login'));
const Test = lazy(() => import('./routes/test'));
const Collection = lazy(() => import('./routes/collection'));
const Brand = lazy(() => import('./routes/brand'));
const CreateBrand = lazy(() => import('./routes/createBrand'));

const App: Component = () => {
  return (
    <div>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/test" component={Test} />
        <Route path="/collection" component={Collection} />
        <Route path="/brand" component={Brand} />
        <Route path="/newbrand" component={CreateBrand} />
      </Routes>
    </div>
  );
};

export default App;
