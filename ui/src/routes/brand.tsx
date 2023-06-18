import { Component, Show, createSignal, onMount } from 'solid-js';
import { useAuth0 } from '../components/auth0-solidjs';
import { API_BASE } from '../api';

import Navbar from '../components/navbar/navbar';
import EmptyBrandLight from '../components/emptybrand/emptyBrandLight';
import BrandCard from '../components/cards/brandCard';
import BrandSocialCard from '../components/cards/brandSocialCard';
import PageLoader from '../components/pageloader';

const Brand: Component = () => {
  const { state: auth } = useAuth0();
  const [userData, setUserData] = createSignal(null);
  const [loading, setLoading] = createSignal(true);

  onMount(async () => {
    try {
      const response = await fetch(
        `${API_BASE}/brand/get_brand/${auth.user?.email}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const j = await response.json();
      setUserData(j);
      console.log('user', j);
    } catch (error) {
      console.error('Fetch error: ', error);
    } finally {
      setLoading(false);
    }
  });

  return (
    <>
      <Navbar />
      <Show when={loading()}>
        <PageLoader />
      </Show>
      <Show when={!loading()}>
        {userData() === null ? (
          <div class="h-screen flex items-center justify-center">
            <EmptyBrandLight />
          </div>
        ) : (
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 mt-4">
            <div class="col-start-1 md:col-start-2">
              <BrandCard userData={userData} />
            </div>
            <div class="col-start-1 md:col-start-2">
              <BrandSocialCard userData={userData} />
            </div>
          </div>
        )}
      </Show>
    </>
  );
};

export default Brand;
