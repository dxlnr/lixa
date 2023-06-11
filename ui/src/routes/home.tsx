import { Component } from 'solid-js';

import TryButton from '../components/buttons/tryButton';
import LinkedButton from '../components/buttons/linkedButton';
import LandingNavbar from '../components/navbar/landingNavbar';

const Home: Component = () => {
  return (
    <div class="body-font font-syne text-white bg-black h-screen">
      <LandingNavbar />
      <div class="container h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex items-end">
        <div class="cols-container pb-32 md:pb-48 m-5">
          <div class="mt-spacing-10 md:w-8-cols lg:ml-2-cols lg:w-10-cols">
            <div class="lg:pr-48">
              <h1 class="text-hxl tracking-tighter"> LIXAAI </h1>
            </div>
          </div>
          <div class="pt-spacing-4 xs:w-6-cols md:w-7-cols lg:ml-2-cols lg:w-6-cols">
            <p class="text-4xl p-2">
              {' '}
              Contextual Content Creation Platform for amplifying marketing
              campaigns.{' '}
            </p>
            <ul class="p-2 mt-spacing-6 flex flex-row items-center">
              <li class="pr-4">
                <TryButton />
              </li>
              <li>
                <LinkedButton />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
