import { Component, lazy } from 'solid-js';
import { Routes, Route } from "@solidjs/router";

import Navbar from './components/navbar/navbar';

const Home = lazy(() => import ("./routes/home"));
const Account = lazy(() => import ("./routes/account"));

const App: Component = () => {
  return (
    // <div class="bg-cover h-screen bg-[url('./assets/bg.svg')]">
    <div class="bg-cover h-screen">
      <Navbar />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/account" component={Account} />
      </Routes>
    </div>
  );
};

export default App;
