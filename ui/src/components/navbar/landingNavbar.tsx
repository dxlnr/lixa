import { Component } from 'solid-js';
import { A } from '@solidjs/router';

const LandingNavbar: Component = () => {
  return (
    <nav>
      <div class="flex flex-wrap items-center justify-between p-4">
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-0">
          <A href="https://lixa.ai" class="flex items-center">
            <img src={'/lixalogo-01.png'} class="h-8 mr-3" alt="logo" />
          </A>
        </div>
      </div>
    </nav>
  );
};

export default LandingNavbar;
