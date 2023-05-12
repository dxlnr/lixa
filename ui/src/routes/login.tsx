import type { Component } from 'solid-js';

import LoginForm from '../components/loginform/loginform';

const Login: Component = () => {
  return (
    <div class="bg-cover h-screen ">
      <div class="grid lg:grid-cols-2 grid-cols-1">
        <LoginForm />
        <div class="hidden lg:block bg-[url('./assets/bg.svg')]"> </div>
      </div>
    </div>
  );
};

export default Login;
