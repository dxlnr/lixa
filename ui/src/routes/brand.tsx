import type { Component } from 'solid-js';

import { createSignal, onCleanup, onMount } from 'solid-js';
// import { fetchUserData } from './api';

import Navbar from '../components/navbar/navbar';
import EmptyBrand from '../components/emptybrand/emptybrand';

const Brand: Component = () => {
  const [userData, setUserData] = createSignal(null);

  onMount(() => {
    const fetchData = async () => {
      // const data = await fetchUserData(); // Replace with your API call
      const data = null;
      setUserData(data);
    };

    fetchData();
  });

  // useEffect(() => {
  //   const cleanup = onCleanup(() => {
  //     // Clean up any resources when the component unmounts
  //     // (e.g., cancel any pending requests)
  //   });

  //   return cleanup;
  // });

  return (
    <>
      <Navbar />
      {userData() === null ? (
        <div class="flex items-stretch ">
          <EmptyBrand />
        </div>
      ) : (
        <div class="w-full px-6 py-6 mx-auto loopple-min-height-78vh text-slate-500">
          <div class="relative flex flex-col flex-auto min-w-0 p-4 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-black bg-clip-border mb-4">
            <div class="flex flex-wrap -mx-3">
              <div class="flex-none w-auto max-w-full px-3">
                <div class="text-size-base ease-soft-in-out h-18.5 w-18.5 relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200">
                  <img
                    src="/logo4.svg"
                    alt="brand_logo"
                    class="w-full shadow-soft-sm rounded-xl"
                  />
                </div>
              </div>
              <div class="flex-none w-auto max-w-full px-3 my-auto">
                <div class="h-full">
                  <h5 class="mb-1">Modalic</h5>
                  <p class="mb-0 font-semibold leading-normal text-size-sm">
                    Software
                  </p>
                </div>
              </div>
              <div class="w-full max-w-full px-3 mx-auto mt-4 sm:my-auto sm:mr-0 md:w-1/2 md:flex-none lg:w-4/12"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Brand;
