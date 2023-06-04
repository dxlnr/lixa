import { Component } from 'solid-js';

import { useAuth0 } from '../components/auth0-solidjs';
import Navbar from '../components/navbar/navbar';

const Callback: Component = () => {
  const auth: Auth0State<User> | undefined = useAuth0();

  if (auth?.error) {
    return (
      <>
        <div>
          <h1 id="page-title">
            Error
          </h1>
          <div >
            <p id="page-description">
              <span>{auth?.error.message}</span>
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <div >
      <Navbar />
    </div>
  );
};

export default Callback;
