import type { Component } from 'solid-js';
import { useNavigate } from '@solidjs/router';

const EmptyBrand: Component = () => {
  const navigate = useNavigate();

  return (
    <div class="container mx-auto w-full relative">
      <img src="/brandBackground.svg" alt="" class="w-full h-auto" />
      <div class="flex justify-center items-center w-1/2 h-1/2 absolute top-1/4 left-1/4 rounded-lg p-4">
        <div class="flex flex-col">
          <p class="-mt-20 pb-8 text-lg font-light">
            Your brand will appear here
          </p>
          <div class="text-white mx-auto">
            <button
              type="button"
              class="text-white bg-[#050708] hover:bg-opacity-50 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-8 py-3 text-center inline-flex items-center"
              onClick={() => navigate('/newbrand')}
            >
              create new brand
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyBrand;
