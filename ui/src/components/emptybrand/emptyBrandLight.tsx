import type { Component } from 'solid-js';
import { useNavigate } from '@solidjs/router';

const EmptyBrandLight: Component = () => {
  const navigate = useNavigate();

  return (
    <div class="w-1/2 md:w-1/3">
      <div class="flex flex-col justify-center items-center -mt-36">
        <button
          type="button"
          class="w-full justify-center text-black bg-white border border-gray-200 
            ease-in-out duration-500 hover:bg-gradient-to-r from-blue-200 
            via-sky-100 to-sky-50 focus:ring-1 focus:outline-none focus:ring-slate-400 
            font-medium rounded-lg text-sm px-8 py-3 text-center inline-flex items-center"
          onClick={() => navigate('/brand/new')}
        >
          create new brand
        </button>
      </div>
    </div>
  );
};

export default EmptyBrandLight;
