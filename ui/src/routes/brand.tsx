import type { Component } from 'solid-js';

import { createSignal, onCleanup, onMount } from 'solid-js';
// import { fetchUserData } from './api';

import Navbar from '../components/navbar/navbar';
import EmptyBrandLight from '../components/emptybrand/emptyBrandLight';
import BrandCard from '../components/cards/brandCard';
import BrandSocialCard from '../components/cards/brandSocialCard';

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
        <div class="h-screen flex items-center justify-center">
          <EmptyBrandLight />
        </div>
      ) : (
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 mt-4">
          <div class="col-span-2">
            <BrandCard />
          </div>
          <BrandSocialCard />
        </div>
      )}
    </>
  );
};

export default Brand;
