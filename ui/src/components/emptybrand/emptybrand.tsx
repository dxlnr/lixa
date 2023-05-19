import type { Component } from 'solid-js';

import Modal from '../../components/modals/modal';
import BrandModalChild from '../modals/brandModalChild';

const EmptyBrand: Component = () => {
  return (
    <div class="container mx-auto w-full relative">
      <img src="/brandBackground.svg" alt="" class="w-full h-auto" />
      <div class="flex justify-center items-center w-1/2 h-1/2 absolute top-1/4 left-1/4 rounded-lg p-4">
        <div class="flex flex-col">
          <p class="-mt-20 pb-8 text-lg font-light">
            Your brands will appear here
          </p>
          <div class="text-white mx-auto">
            <Modal button_text={'Create new Brand'}>
              <BrandModalChild />
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyBrand;
