import { Component } from 'solid-js';

const CreateBrandFormGeneral: Component = (props) => {
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    props.setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangeRequired = (event: any) => {
    // reset the error as user tries to adjust the input field.
    props.setError(false);
    const { name, value } = event.target;
    props.setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div class="container m-auto p-8 rounded-lg">
      <div
        class={
          'flex justify-between sm:inline-flex sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full border-b focus-within:border-b focus-within:border-violet-400 ' +
          (props.error() ? 'border-red-600' : 'border-gray-200')
        }
      >
        <svg
          class="w-5 h-5"
          width="160px"
          height="160px"
          viewBox="0 0 16 16"
          id="company-small-16px"
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
            <rect
              id="Retângulo_223"
              data-name="Retângulo 223"
              width="16"
              height="16"
              fill="#ccc"
              opacity="0"
            ></rect>{' '}
            <g id="Icone" transform="translate(0.648 -0.621)">
              {' '}
              <g
                id="Retângulo_203"
                data-name="Retângulo 203"
                transform="translate(2.352 2.621)"
                fill="none"
                stroke="#000000"
                stroke-width="1"
              >
                {' '}
                <path
                  d="M1,0H9a1,1,0,0,1,1,1V12a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V1A1,1,0,0,1,1,0Z"
                  stroke="none"
                ></path>{' '}
                <rect
                  x="0.5"
                  y="0.5"
                  width="9"
                  height="11"
                  rx="0.5"
                  fill="none"
                ></rect>{' '}
              </g>{' '}
              <g
                id="Retângulo_227"
                data-name="Retângulo 227"
                transform="translate(5.352 9.621)"
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
              >
                {' '}
                <rect width="4" height="5" stroke="none"></rect>{' '}
                <rect x="0.5" y="0.5" width="3" height="4" fill="none"></rect>{' '}
              </g>{' '}
              <g id="Grupo_334" data-name="Grupo 334">
                {' '}
                <g
                  id="Retângulo_206"
                  data-name="Retângulo 206"
                  transform="translate(5.352 5.621)"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                >
                  {' '}
                  <rect width="1" height="1" stroke="none"></rect>{' '}
                  <rect x="0.5" y="0.5" fill="none"></rect>{' '}
                </g>{' '}
                <g
                  id="Retângulo_225"
                  data-name="Retângulo 225"
                  transform="translate(5.352 7.621)"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                >
                  {' '}
                  <rect width="1" height="1" stroke="none"></rect>{' '}
                  <rect x="0.5" y="0.5" fill="none"></rect>{' '}
                </g>{' '}
                <g
                  id="Retângulo_224"
                  data-name="Retângulo 224"
                  transform="translate(8.352 5.621)"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                >
                  {' '}
                  <rect width="1" height="1" stroke="none"></rect>{' '}
                  <rect x="0.5" y="0.5" fill="none"></rect>{' '}
                </g>{' '}
                <g
                  id="Retângulo_226"
                  data-name="Retângulo 226"
                  transform="translate(8.352 7.621)"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                >
                  {' '}
                  <rect width="1" height="1" stroke="none"></rect>{' '}
                  <rect x="0.5" y="0.5" fill="none"></rect>{' '}
                </g>{' '}
              </g>{' '}
            </g>{' '}
          </g>
        </svg>
        <input
          type="text"
          name="name"
          id="name"
          class={
            'py-3 px-1 block w-full outline-none text-sm ' +
            (props.error() ? 'placeholder-red-600' : '')
          }
          placeholder="brand name"
          aria-describedby="hs-inline-input-helper-text"
          onInput={handleChangeRequired}
        />
        {props.error() && (
          <>
            <p class="text-xs text-red-600">required</p>
            <svg
              class="h-10 w-10"
              fill="#BE1931"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 100 100"
              enable-background="new 0 0 100 100"
              xml:space="preserve"
              stroke="#BE1931"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <g>
                  {' '}
                  <path d="M45.764,68.114c0,2.448,1.984,4.433,4.434,4.433s4.434-1.984,4.434-4.433c0-2.451-1.984-4.435-4.434-4.435 S45.764,65.663,45.764,68.114z"></path>{' '}
                  <path d="M52.5,54.881v-23c0-1.104-0.896-2-2-2s-2,0.896-2,2v23c0,1.104,0.896,2,2,2S52.5,55.985,52.5,54.881z"></path>{' '}
                </g>{' '}
              </g>
            </svg>
          </>
        )}
      </div>
      <div class="flex justify-between pt-4 sm:inline-flex sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full border-b border-gray-200 focus:border-b focus:border-violet-400">
        <svg
          class="w-5 h-5 text-gray-500"
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
        <input
          type="text"
          name="location"
          id="location"
          class="py-3 px-1 block w-full outline-none text-sm"
          placeholder="location"
          aria-describedby="hs-inline-input-helper-text"
          onInput={handleChange}
        />
      </div>
      <div class="flex justify-between pt-4 sm:inline-flex sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full border-b border-gray-200 focus:border-b focus:border-violet-400">
        <svg
          class="w-5 h-5 text-gray-500"
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
        <input
          type="text"
          name="profession"
          id="profession"
          class="py-3 px-1 block w-full outline-none text-sm "
          placeholder="profession"
          aria-describedby="hs-inline-input-helper-text"
          onInput={handleChange}
        />
      </div>

      <div class="flex justify-between pt-4 sm:inline-flex sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full border-b border-gray-200">
        <svg
          class="w-5 h-5 text-gray-500"
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
              d="M10.0002 13C10.4297 13.5741 10.9776 14.0491 11.6067 14.3929C12.2359 14.7367 12.9317 14.9411 13.6468 14.9923C14.362 15.0435 15.0798 14.9403 15.7515 14.6897C16.4233 14.4392 17.0333 14.047 17.5402 13.54L20.5402 10.54C21.451 9.59695 21.955 8.33394 21.9436 7.02296C21.9322 5.71198 21.4063 4.45791 20.4793 3.53087C19.5523 2.60383 18.2982 2.07799 16.9872 2.0666C15.6762 2.0552 14.4132 2.55918 13.4702 3.46997L11.7502 5.17997M14.0002 11C13.5707 10.4258 13.0228 9.95078 12.3936 9.60703C11.7645 9.26327 11.0687 9.05885 10.3535 9.00763C9.63841 8.95641 8.92061 9.0596 8.24885 9.31018C7.5771 9.56077 6.96709 9.9529 6.4602 10.46L3.4602 13.46C2.54941 14.403 2.04544 15.666 2.05683 16.977C2.06822 18.288 2.59407 19.542 3.52111 20.4691C4.44815 21.3961 5.70221 21.9219 7.01319 21.9333C8.32418 21.9447 9.58719 21.4408 10.5302 20.53L12.2402 18.82"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{' '}
          </g>
        </svg>
        <input
          type="text"
          name="website"
          id="website"
          class="py-3 px-1 block w-full outline-none text-sm focus:border-violet-400"
          placeholder="website"
          aria-describedby="hs-inline-input-helper-text"
          onInput={handleChange}
        />
      </div>
    </div>
  );
};

export default CreateBrandFormGeneral;
