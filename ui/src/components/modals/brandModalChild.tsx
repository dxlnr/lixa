import { Component } from 'solid-js';

const BrandModalChild: Component = () => {
  return (
    <div>
      <div class="pb-2 px-4">
        <div class="flex justify-center mb-8 md:mb-0">
          <img
            src="/undraw_design_team_re_gh2d.svg"
            class="w-80"
            alt="Phone image" />
        </div>

        <div class="mt-12">
          <form>
            <div>
              <input
                class="w-full py-2 border-b border-gray-300 focus:outline-none focus:border-fuchsia-300"
                type=""
                placeholder="Brand Name"
              />
            </div>
            <div class="mt-8">
              <input
                class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-fuchsia-300"
                type=""
                placeholder="Industry"
              />
            </div>
            <div class="mt-10">

              <button
                type="submit"
                class="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-20 sm:px-40 py-3 text-center" 
              >
                Create new Brand
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BrandModalChild;
