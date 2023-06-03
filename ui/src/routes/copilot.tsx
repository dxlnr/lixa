import { Component } from 'solid-js';

import Navbar from '../components/navbar/navbar';
import Sidebar from '../components/sidebar/sidebar';
import { Auth0State, useAuth0 } from '../components/solid-auth0';

const Copilot: Component = () => {
  const auth0: Auth0State<User> | undefined = useAuth0();
  
  return (
    <>
      <Navbar />
      <div class="bg-stone-100 h-screen flex flex-col h-9/10 justify-between p-2">
        <div class="">
          <Sidebar />
          <div>{auth0?.isAuthenticated() ? <div>Logout</div> : <div>Login</div>}</div>
        </div>
      </div>
    </>
  );
};

export default Copilot;
