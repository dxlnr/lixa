import type { Component } from 'solid-js';

import { useAuth0 } from '../auth0-solidjs/';

const TryButton: Component = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <button
        type="submit"
        class="w-full items-center text-white hover:text-black border border-white hover:bg-white underline font-medium text-xl px-2.5 py-2 inline-flex text-center"
        onClick={() => loginWithRedirect()}
      >
        Try lixa
        <svg
          class="w-4 h-4 mr-2 ml-1"
          width="160px"
          height="160px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {' '}
            <title></title>{' '}
            <g id="Complete">
              {' '}
              <g id="arrow-up-right">
                {' '}
                <g>
                  {' '}
                  <polyline
                    data-name="Right"
                    fill="none"
                    id="Right-2"
                    points="18.7 12.4 18.7 5.3 11.6 5.3"
                    stroke="#ffffff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></polyline>{' '}
                  <line
                    fill="none"
                    stroke="#ffffff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    x1="5.3"
                    x2="17.1"
                    y1="18.7"
                    y2="6.9"
                  ></line>{' '}
                </g>{' '}
              </g>{' '}
            </g>{' '}
          </g>
        </svg>
      </button>
    </>
  );
};

export default TryButton;
