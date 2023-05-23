import { Component } from 'solid-js';

import '../slider/slider.css';
import { Slider, createSlider } from '../slider';
// import { CreateBrandFormGeneral } from "../brandForms/general";
import CreateBrandFormGeneral from '../brandForms/general';

const Carousel: Component = () => {
  const [slider, { next, prev }] = createSlider();

  return (
    <>
      <div use:slider>
        <div class="flex justify-center items-center">
          <CreateBrandFormGeneral />
        </div>
        <div class="h-1/2 flex justify-center items-center text-xl bg-slate-700 text-white">
          2
        </div>
        <div class="h-1/2 flex justify-center items-center text-xl bg-slate-900 text-white">
          3
        </div>
      </div>
      <div>
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </div>
    </>
  );
};

export default Carousel;
