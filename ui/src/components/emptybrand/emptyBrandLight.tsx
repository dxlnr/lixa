import type { Component } from 'solid-js';
import { useNavigate } from '@solidjs/router';

const EmptyBrandLight: Component = () => {
  const navigate = useNavigate();

  return (
    <div class="w-1/2 md:w-1/3">
      <div class="flex flex-col justify-center items-center -mt-36">
        <button
          type="button"
          class="w-full justify-center text-black bg-white border border-gray-200 ease-in-out duration-500 hover:bg-gradient-to-r from-fuchsia-50 via-purple-100 to-fuchsia-50 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-8 py-3 text-center inline-flex items-center"
          onClick={() => navigate('/brand/new')}
        >
          create new brand
        </button>
      </div>
    </div>
  );
};

export default EmptyBrandLight;
