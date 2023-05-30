import type { Component } from 'solid-js';

import Navbar from '../components/navbar/navbar';
import BrandCard from '../components/cards/brandCard';
import BrandSocialCard from '../components/cards/brandSocialCard';

const Account: Component = () => {
  return (
    <>
      <Navbar />
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        <div class="col-span-2">
          <BrandCard />
        </div>
        <div class="col-start-2">
        <BrandSocialCard />
        </div>
      </div>
    </>
  );
};

export default Account;
