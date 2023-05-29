import type { Component } from 'solid-js';

import Navbar from '../components/navbar/navbar';
import BrandSocialCard from '../components/cards/brandSocialCard';

const Account: Component = () => {
  return (
    <>
      <Navbar />
      <div class="flex flex-col items-center">
        <BrandSocialCard />
      </div>
    </>
  );
};

export default Account;
