import type { Component } from 'solid-js';

import Navbar from '../components/navbar/navbar';

const Brand: Component = () => {
  return (
    <>
      <Navbar />
      <div class="flex flex-col md:h-screen mx-10 md:mx-40 my-10">
      </div>
    </>
  );
};

export default Brand;
