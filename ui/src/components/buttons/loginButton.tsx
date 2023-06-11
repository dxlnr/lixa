import type { Component } from 'solid-js';

import { useAuth0 } from '../auth0-solidjs/';

const LoginButton: Component = () => {
  const { state: auth, loginWithRedirect } = useAuth0();

  return (
    <>
      <button
        type="submit"
        class="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        onClick={() => loginWithRedirect()}
      >
        Sign in
      </button>
    </>
  );
};

export default LoginButton;
