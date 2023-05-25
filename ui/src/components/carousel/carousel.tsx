import { Component, createSignal } from 'solid-js';
import { useNavigate } from '@solidjs/router';

import '../slider/slider.css';
import { createSlider } from '../slider';
import CreateBrandFormGeneral from '../brandForms/general';
import CreateBrandFormSocials from '../brandForms/socials';
import CreateBrandFormLogo from '../brandForms/logo';

const Carousel: Component = () => {
  const [slider, { next, prev }] = createSlider();
  const [formData, setFormData] = createSignal({});
  const [error, setError] = createSignal(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (formData()['name'] === undefined || formData()['name'] === '') {
      setError(true);
    } else {
      try {
        // const response = await fetch('http://192.168.88.18:5000/api/brand/create_brand',
        const response = await fetch(
          'http://127.0.0.1:5000/api/brand/create_brand',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(formData()),
          }
        );

        if (response.ok) {
          // Request was successful
          console.log('POST request succeeded');
          navigate('/brand');
        } else {
          // Request failed
          console.error('POST request failed');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    }
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div use:slider>
        <div class="justify-center items-center">
          <CreateBrandFormGeneral
            setFormData={setFormData}
            error={error}
            setError={setError}
          />
        </div>
        <div class="justify-center items-center">
          <CreateBrandFormSocials setFormData={setFormData} />
        </div>
        <div class="justify-center items-center">
          <CreateBrandFormLogo handleSubmit={handleSubmit} />
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
