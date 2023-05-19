import type { Component } from 'solid-js';

const EmptyBrand: Component = () => {
  return (
    <div class="container mx-auto">
      <div class="inset-0 flex justify-center items-center z-10">
        <div class="text-white">
          <button 
            type="button" 
            class="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30">
            Create new Brand
          </button>
        </div>
      </div>
      <div class="inset-0 flex justify-center items-center z-1">
        <img class="w-full h-full" src="/brandBackground.svg" alt="user photo" />
      </div>
    </div>
  )
};

export default EmptyBrand;
