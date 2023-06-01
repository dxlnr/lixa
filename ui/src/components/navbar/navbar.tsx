import { Component, createSignal } from 'solid-js';
import { A } from '@solidjs/router';
import { useLocation } from '@solidjs/router';

import DropdownProfil from './dropdownProfil';
import logo from '/logo4.svg';

const Navbar: Component = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = createSignal(false);

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
                href="/"
                class={`block py-2 pl-6 pr-1 hover:text-violet-600 ${
                  isActive('/') ? 'text-black' : 'text-gray-400'
                }`}
              >
                Copilot
              </A>
            </li>
            <li>
              <A
                href="/collection"
                class={`block py-2 pr-1 hover:text-violet-600 ${
                  isActive('/collection') ? 'text-black' : 'text-gray-400'
                }`}
              >
                Collection
              </A>
            </li>
            <li>
              <A
                href="/brand"
                class={`block py-2 pr-4 hover:text-violet-600 ${
                  isActive('/brand') ? 'text-black' : 'text-gray-400'
                }`}
              >
                Brand
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
