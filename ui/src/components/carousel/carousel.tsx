import { Component, createSignal } from 'solid-js';
import { useNavigate } from '@solidjs/router';
import { useAuth0 } from '../auth0-solidjs';

import '../slider/slider.css';
import { createSlider } from '../slider';
import CreateBrandFormGeneral from '../brandForms/general';
import CreateBrandFormSocials from '../brandForms/socials';
import CreateBrandFormLogo from '../brandForms/logo';
import { API_BASE } from '../../api';

const Carousel: Component = () => {
  const [slider, { next, prev }] = createSlider();
  const [formData, setFormData] = createSignal({});
  const [logo, setLogo] = createSignal(null);
  const [error, setError] = createSignal(null);
  const [errorReq, setErrorReq] = createSignal(false);
  const navigate = useNavigate();
  const { state: auth } = useAuth0();

  const handleSubmit = async () => {
    if (formData()['name'] === undefined || formData()['name'] === '') {
      setErrorReq(true);
      setError('Please, make sure all required fields are filled.');
    } else {
      setFormData((prev) => ({ ...prev, ['user']: auth.user?.email }));
      const form = new FormData();

      form.append('info', JSON.stringify(formData()));
      if (logo()) {
        var logo_file = logo();
        form.append('file', logo_file);
      }
      try {
        const response = await fetch(`${API_BASE}/brand/create_brand`, {
          method: 'POST',
          body: form,
        });
        if (response.ok) {
          navigate('/brand');
        } else {
          setError('500. Request failed. Please retry.');
        }
      } catch (error) {
        setError('504. An internal error occurred. Please retry.');
      }
    }
  };

  return (
    <>
      <div use:slider>
        <div class="justify-center items-center">
          <CreateBrandFormGeneral
            setFormData={setFormData}
            error={errorReq}
            setError={setErrorReq}
          />
        </div>
        <div class="justify-center items-center">
          <CreateBrandFormSocials setFormData={setFormData} />
        </div>
        <div class="justify-center items-center">
          <CreateBrandFormLogo
            logo={logo}
            setLogo={setLogo}
            handleSubmit={handleSubmit}
            error={error}
          />
        </div>
      </div>
      <div>
        <button
          type="button"
          class="h-full px-4 cursor-pointer group focus:outline-none"
          onClick={prev}
          data-carousel-prev
        >
          <span
            class="inline-flex items-center justify-center w-8 h-8 rounded-full 
            sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 
            group-focus:ring-4 group-focus:ring-white group-focus:outline-none"
          >
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
          <span
            class="inline-flex items-center justify-center w-8 h-8 rounded-full 
            sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 
            group-focus:ring-4 group-focus:ring-white group-focus:outline-none"
          >
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
