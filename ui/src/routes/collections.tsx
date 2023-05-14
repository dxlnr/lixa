import type { Component } from 'solid-js';

import Navbar from '../components/navbar/navbar';
import Collect from '../components/collect/collect';
import Card from '../components/card/card';

const Collections: Component = () => {
  return (
    <>
      <Navbar />
      <div class="flex flex-col md:h-screen mx-10 md:mx-32 my-10">
        <h1 class="text-xl font-bold py-8"> Collections </h1>
        <p class="text-md font-light py-4"> All Collections</p>
        <div class="flex flex-row">
          <Collect />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Collections;
