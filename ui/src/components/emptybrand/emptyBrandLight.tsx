import type { Component } from 'solid-js';
import { useNavigate } from '@solidjs/router';

const EmptyBrandLight: Component = () => {
  const navigate = useNavigate();

  return (
    <div class="w-1/5">
      <div class="flex flex-col justify-center items-center">
          <p class="-mt-20 pb-8 text-lg font-light">
            Your brand will appear here
          </p>
          <button
              type="button"
              class="w-full flex justify-center text-black bg-white border border-gray-200 ease-in-out duration-500 hover:bg-gradient-to-r from-fuchsia-50 via-purple-100 to-fuchsia-50 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-8 py-3 text-center inline-flex items-center"
              onClick={() => navigate('/newbrand')}
            >
              create new brand
          </button>
      </div>
    </div>
  );
};

export default EmptyBrandLight;
