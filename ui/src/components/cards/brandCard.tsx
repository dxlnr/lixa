import { Component, Show } from 'solid-js';

const BrandCard: Component = (props) => {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div class="relative flex flex-col flex-auto min-w-0 p-4 overflow-hidden break-words border-0 shadow-blur bg-clip-border">
        <div class="flex flex-wrap items-center">
          <div class="flex-none w-auto max-w-full">
            <div class="text-size-base ease-soft-in-out h-18.5 w-18.5 relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200">
              {props.userData().image && (
                <img
                  class="w-24 h-24 rounded-lg"
                  src={`data:image/jpeg;base64,${props.userData().image}`}
                  alt="Profile"
                />
              )}
            </div>
          </div>
          <div class="flex-none w-auto max-w-full px-4 my-auto">
            <div class="h-full">
              <h2 class="text-3xl font-semibold mb-1 text-slate-800">
                {props.userData().name}
              </h2>

              <div class="flex flex-row">
                <svg
                  class="w-4 h-5 text-gray-500"
                  width="160px"
                  height="160px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2 6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V15C22 16.6569 20.6569 18 19 18H13V19H15C15.5523 19 16 19.4477 16 20C16 20.5523 15.5523 21 15 21H9C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19H11V18H5C3.34315 18 2 16.6569 2 15V6ZM5 5C4.44772 5 4 5.44772 4 6V15C4 15.5523 4.44772 16 5 16H19C19.5523 16 20 15.5523 20 15V6C20 5.44772 19.5523 5 19 5H5Z"
                      fill="#000000"
                    ></path>{' '}
                  </g>
                </svg>
                <p class="mb-0 leading-normal text-sm text-gray-600 px-2">
                  {props.userData().profession}
                </p>
              </div>

              <div class="flex flex-row pt-1">
                <svg
                  class="w-4 h-5 text-gray-500"
                  fill="#000000"
                  width="160px"
                  height="160px"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"></path>{' '}
                  </g>
                </svg>
                <p class="mb-0 leading-normal text-sm text-gray-600 px-2">
                  {props.userData().location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
