import { Component } from 'solid-js';

const CreateBrandFormGeneral: Component = () => {
  return (
    <div class="container m-auto p-8 rounded-lg">
      <div class="flex justify-between sm:inline-flex sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full">
        <input
          type="text"
          name="name"
          id="name"
          class="py-3 px-1 block w-full outline-none border-b border-gray-200 text-sm focus:border-violet-400"
          placeholder="brand name"
          aria-describedby="hs-inline-input-helper-text"
        />
      </div>
      <div class="flex justify-between pt-4 sm:inline-flex sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full">
        <input
          type="text"
          name="location"
          id="location"
          class="py-3 px-1 block w-full outline-none border-b border-gray-200 text-sm focus:border-b focus:border-violet-400"
          placeholder="location"
          aria-describedby="hs-inline-input-helper-text"
        />
      </div>
      <div class="flex justify-between pt-4 sm:inline-flex sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full">
        <input
          type="text"
          name="profession"
          id="profession"
          class="py-3 px-1 block w-full outline-none border-b border-gray-200 text-sm focus:border-violet-400"
          placeholder="profession"
          aria-describedby="hs-inline-input-helper-text"
        />
      </div>

      <div class="flex justify-between pt-4 sm:inline-flex sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full">
        <input
          type="text"
          name="website"
          id="website"
          class="py-3 px-1 block w-full outline-none border-b border-gray-200 text-sm focus:border-violet-400"
          placeholder="@website"
          aria-describedby="hs-inline-input-helper-text"
        />
      </div>
    </div>
  );
};

export default CreateBrandFormGeneral;
