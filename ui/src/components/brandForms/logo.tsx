import { Component } from 'solid-js';

const CreateBrandFormLogo: Component = (props) => {
  return (
    <>
      <div class="my-20 sm:inline-flex sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full">
        <label
          for="inline-input-label-with-helper-text"
          class="block text-sm mr-4 font-medium dark:text-white"
        >
          logo
        </label>
        <input
          type="file"
          name="file-input-medium"
          id="file-input-medium"
          class="block w-full lg:w-3/5 border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 file:border-0 file:bg-black file:text-white file:mr-4 file:font-semibold file:py-3 file:px-4"
        />
        <p
          class="text-sm text-gray-500 mt-2 hidden lg:block"
          id="hs-inline-input-helper-text"
        >
          Share your awesome logo!
        </p>
      </div>
      <div class="flex justify-center mb-10">
        <div>
          <button
            type="submit"
            class={
              'text-white bg-black hover:bg-opacity-50 focus:outline-none font-medium rounded-lg text-sm px-20 sm:px-40 py-3 text-center ' +
              (props.error() ? 'transition duration-500 focus:bg-red-600' : '')
            }
            onClick={props.handleSubmit}
          >
            create new brand
          </button>
          {props.error() && (
            <p class="text-xs text-red-600 py-2">
              Please, make sure all required fields are filled.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default CreateBrandFormLogo;
