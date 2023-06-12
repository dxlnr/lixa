import type { Component } from 'solid-js';
import BrandCard from '../components/cards/brandCard';

import Navbar from '../components/navbar/navbar';

const Account: Component = () => {
  return (
    <>
      <Navbar />
      <BrandCard />
    </>
  );
};

export default Account;
