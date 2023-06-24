import { Component, Show } from 'solid-js';

import ProfessionLogo from '../svgs/profession_logo';
import LocationLogo from '../svgs/location_logo';

const BrandCard: Component = (props) => {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div class="relative flex flex-col flex-auto min-w-0 p-4 overflow-hidden break-words border-0 shadow-blur bg-clip-border">
        <div class="flex flex-wrap items-center">
          <div class="flex-none w-auto max-w-full">
            <div
              class="text-size-base ease-soft-in-out h-18.5 w-18.5 
              relative inline-flex items-center justify-center rounded-xl 
              text-white transition-all duration-200"
            >
              {props.userData().logo && (
                <img
                  class="w-24 h-24 rounded-lg"
                  src={props.userData().logo}
                  alt="Profile"
                />
              )}
            </div>
          </div>
          <div class="flex-none w-auto max-w-full px-4 my-auto">
            <div class="h-full">
              <h2 class="text-3xl font-semibold mb-1 text-slate-800">
                {props.userData().name}
              </h2>

              <div class="flex flex-row">
                <ProfessionLogo styling="w-4 h-5 text-gray-500" />
                <p class="mb-0 leading-normal text-sm text-gray-600 px-2">
                  {props.userData().profession}
                </p>
              </div>

              <div class="flex flex-row pt-1">
                <LocationLogo styling="w-4 h-5 text-gray-500" />
                <p class="mb-0 leading-normal text-sm text-gray-600 px-2">
                  {props.userData().location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
