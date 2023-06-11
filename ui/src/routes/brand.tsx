import { Component, createSignal, onCleanup, onMount } from 'solid-js';
import { useAuth0 } from '../components/auth0-solidjs';
// import { fetchUserData } from './api';

import Navbar from '../components/navbar/navbar';
import EmptyBrandLight from '../components/emptybrand/emptyBrandLight';
import BrandCard from '../components/cards/brandCard';
import BrandSocialCard from '../components/cards/brandSocialCard';


const Brand: Component = () => {
  const { state: auth } = useAuth0();
  const [userData, setUserData] = createSignal(null);

  onMount(async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/api/brand/get_brand/${auth.user?.email}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const j= await response.json();
        setUserData(j);
      } catch (error) {
        console.error("Fetch error: ", error);
      }
  });

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
            <BrandCard userData={userData}/>
          </div>
          <BrandSocialCard userData={userData}/>
        </div>
      )}
    </>
  );
};

export default Brand;
