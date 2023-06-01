import { Component, createSignal } from 'solid-js';
import { useAuth0 } from '../solid-auth0';

const DropdownProfil: Component = () => {
  const auth = useAuth0();
  const [isOpen, setIsOpen] = createSignal(false);

  function toggleDropdown() {
    setIsOpen(!isOpen());
  }

  return (
    <div
      class={
        'relative inline-block text-left ' + (isOpen() ? 'bg-white w-64' : '')
      }
    >
      <div
        class={
          isOpen()
            ? 'flex justify-end shadow-lg ring-1 ring-black ring-opacity-5 rounded-t-md'
            : ''
        }
      >
        <button
          type="button"
          class="flex rounded-full hover:opacity-50 md:mr-0 p-1"
          id="user-menu-button"
          onClick={toggleDropdown}
        >
          <img
            class="w-9 h-9 rounded-full"
            src={auth?.user.picture}
            alt={auth?.user.name}
          />
        </button>
      </div>
      {isOpen() && (
        <div
          class="absolute right-0 z-10 w-64 origin-top-right divide-y divide-gray-100 rounded-b-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div class="px-4 py-3">
            <span class="block text-sm text-gray-900">{auth?.user.name}</span>
            <span class="block text-sm text-gray-500 truncate">
              {auth?.user.email}
            </span>
          </div>
          <ul class="px-2 py-3" aria-labelledby="user-menu-button">
            <li>
              <button
                class="flex text-sm items-center"
                onClick={() =>
                  auth?.logout({ returnTo: window.location.origin })
                }
              >
                <svg
                  class="h-6 w-6 p-1"
                  fill="#000000"
                  width="160px"
                  height="160px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z"></path>
                  </g>
                </svg>
                Sign out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownProfil;
