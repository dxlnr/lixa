import { Component } from 'solid-js';

import Carousel from '../components/carousel/carousel';

const CreateBrand: Component = () => {
  return (
    <div class="flex flex-col justify-center items-center w-1/2 h-1/2 absolute top-1/4 left-1/4 rounded-lg p-4">
      <Carousel />
    </div>
  );
};

export default CreateBrand;
