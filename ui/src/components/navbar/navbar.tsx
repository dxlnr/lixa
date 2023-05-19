import { A } from '@solidjs/router';
import { useLocation } from '@solidjs/router';

import logo from '/logo4.svg';
import pp from '/pp.jpg';

const Navbar = () => {
  const location = useLocation();

  const isActive = (url: string) => {
    return location.pathname === url;
  };

  return (
    <nav class="bg-white border-b border-gray-200">
      <div class="flex flex-wrap items-center justify-between p-4">
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-2"
        >
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
                href="/collections"
                class={`block py-2 pr-1 hover:text-violet-600 ${
                  isActive('/collections') ? 'text-black' : 'text-gray-400'
                }`}
              >
                Collections
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
        <div class="flex items-center md:order-2">
          <button
            type="button"
            class="flex mr-3 text-sm bg-gray-800 rounded-full hover:opacity-50 md:mr-0"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <img class="w-9 h-9 rounded-full" src={pp} alt="user photo" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
