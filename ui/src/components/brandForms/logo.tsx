import { Component } from 'solid-js';

const CreateBrandFormLogo: Component = (props) => {
  function handleFileChange(event) {
    const file = event.target.files[0];
    props.setLogo(file);
  }

  return (
    <>
      <form class="my-20 sm:inline-flex sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full">
        <label
          for="inline-input-label-with-helper-text"
          class="block text-sm mr-4 font-medium"
        >
          logo
        </label>
        <input
          type="file"
          name="file"
          id="file"
          class="block w-full lg:w-3/5 border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 file:border-0 file:bg-black file:text-white file:mr-4 file:font-semibold file:py-2.5 file:px-4"
          onChange={handleFileChange}
        />
        <p
          class="text-sm text-gray-500 mt-2 hidden lg:block"
          id="hs-inline-input-helper-text"
        >
          Share the iconic logo!
        </p>
      </form>
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
            <p class="text-xs text-red-600 py-2">{props.error()}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CreateBrandFormLogo;
