import { Component } from 'solid-js';
import { A } from '@solidjs/router';
import { useLocation } from '@solidjs/router';

import DropdownProfil from './dropdownProfil';
import logo from '/lixalogo-01.png';

const Navbar: Component = () => {
  const location = useLocation();

  const isActive = (url: string) => {
    return location.pathname === url;
  };

  return (
    <nav class="bg-white border-b border-gray-200">
      <div class="flex flex-wrap items-center justify-between p-4">
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-0">
          <A href="https://lixa.ai" class="flex items-center">
            <img src={logo} class="h-8 mr-3" alt="logo" />
          </A>
          <ul class="flex flex-col activate:bg-blue-600 font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <li>
              <A
                href="/copilot"
                class={`block py-2 pl-6 pr-1 hover:text-c-lixa-s ${
                  isActive('/copilot') ? 'text-black' : 'text-gray-400'
                }`}
              >
                copilot
              </A>
            </li>
            <li>
              <A
                href="/collection"
                class={`block py-2 pr-1 hover:text-c-lixa-s ${
                  isActive('/collection') ? 'text-black' : 'text-gray-400'
                }`}
              >
                collection
              </A>
            </li>
            <li>
              <A
                href="/brand"
                class={`block py-2 pr-4 hover:text-c-lixa-s ${
                  isActive('/brand') ? 'text-black' : 'text-gray-400'
                }`}
              >
                brand
              </A>
            </li>
          </ul>
        </div>
        <DropdownProfil />
      </div>
    </nav>
  );
};

export default Navbar;
