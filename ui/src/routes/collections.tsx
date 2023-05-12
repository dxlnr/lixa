import type { Component } from 'solid-js';

import Navbar from '../components/navbar/navbar';
import Collect from '../components/collect/collect';

const Collections: Component = () => {
  return (
    <>
      <Navbar />
      <div class="flex flex-col md:h-screen mx-10 md:mx-40 my-10">
        <h1 class="text-xl font-bold py-10"> Collections </h1>
        <Collect />
      </div>
    </>
  );
};

export default Collections;
