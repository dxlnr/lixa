import { Component } from 'solid-js';
import { useNavigate } from '@solidjs/router';

import Carousel from '../components/carousel/carousel';

const CreateBrand: Component = () => {
  const navigate = useNavigate();

  function handleButtonClick() {
    navigate('/brand');
  }
  return (
    <div class="flex flex-col justify-center items-center w-1/2 h-1/2 absolute top-1/4 left-1/4 rounded-lg p-4">
      <div class="w-full flex content-center justify-end">
        <button onClick={handleButtonClick}>
          <svg
            class="h-5 w-5"
            width="160px"
            height="160px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path
                d="M19 5L4.99998 19M5.00001 5L19 19"
                stroke="#565656"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{' '}
            </g>
          </svg>
        </button>
      </div>
      <Carousel />
    </div>
  );
};

export default CreateBrand;
