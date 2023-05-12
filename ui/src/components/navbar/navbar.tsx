import { A } from '@solidjs/router';
import logo from '../../assets/logo4.svg';
import pp from '../../assets/pp.jpg';

const Navbar = () => {
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
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <li>
              <A
                href="/collections"
                class="block py-2 pl-6 pr-2 text-black hover:text-violet-600"
              >
                Collections
              </A>
            </li>
            <li>
              <A
                href="/brand"
                class="block py-2 pr-4 text-black hover:text-violet-600"
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
