import { Component } from 'solid-js';

import '../slider/slider.css';
import { Slider, createSlider } from '../slider';
import CreateBrandFormGeneral from '../brandForms/general';
import CreateBrandFormSocials from '../brandForms/socials';
import CreateBrandFormLogo from '../brandForms/logo';

const Carousel: Component = () => {
  const [slider, { next, prev }] = createSlider();

  return (
    <>
      <div use:slider>
        <div class="justify-center items-center">
          <CreateBrandFormGeneral />
        </div>
        <div class="justify-center items-center">
          <CreateBrandFormSocials />
        </div>
        <div class="justify-center items-center">
          <CreateBrandFormLogo />
        </div>
      </div>
      <div>
        <button
          type="button"
          class="h-full px-4 cursor-pointer group focus:outline-none"
          onClick={prev}
          data-carousel-prev
        >
          <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-400 sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="h-full px-4 cursor-pointer group focus:outline-none"
          onClick={next}
          data-carousel-next
        >
          <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-400 sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
