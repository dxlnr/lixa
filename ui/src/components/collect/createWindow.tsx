import { A } from '@solidjs/router';

const CreateWindow = () => {
  return (
    <div class="flex w-full">
      <A href="/">
        <label class="flex flex-col h-28 w-64 border border-gray-200 border-dashed rounded-lg cursor-pointer bg-white hover:border-gray-400">
          <div class="flex flex-row p-2 content-center">
            <svg
              class="w-8 h-8"
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
                <path d="M6 12h6V6h1v6h6v1h-6v6h-1v-6H6z"></path>
                <path fill="none" d="M0 0h24v24H0z"></path>
              </g>
            </svg>
            <div class="flex items-center p-1.5">
              <p class="text-sm text-black font-bold">Create with genta</p>
            </div>
          </div>
        </label>
      </A>
    </div>
  );
};

export default CreateWindow;
