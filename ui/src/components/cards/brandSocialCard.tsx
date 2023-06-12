import { Component, For, createSignal } from 'solid-js';

const BrandSocialCard: Component = (props) => {
  const [socials, setSocials] = createSignal([
    {
      type: 'Instagram',
      fetch: props.userData().instagram,
      svg: (
        <svg
          class="w-5 h-5 text-gray-500"
          fill="#000000"
          width="160px"
          height="160px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M12,6.865A5.135,5.135,0,1,0,17.135,12,5.135,5.135,0,0,0,12,6.865Zm0,8.469A3.334,3.334,0,1,1,15.334,12,3.334,3.334,0,0,1,12,15.334Zm6.539-8.672a1.2,1.2,0,1,1-1.2-1.2h0A1.2,1.2,0,0,1,18.539,6.662ZM21.476,5.45a4.917,4.917,0,0,0-1.154-1.772,4.894,4.894,0,0,0-1.77-1.153,7.318,7.318,0,0,0-2.428-.464C15.058,2.012,14.717,2,12,2s-3.057.011-4.124.061a7.326,7.326,0,0,0-2.427.464A4.9,4.9,0,0,0,3.679,3.678,4.882,4.882,0,0,0,2.525,5.45a7.332,7.332,0,0,0-.464,2.427C2.011,8.943,2,9.284,2,12s.011,3.057.061,4.123a7.332,7.332,0,0,0,.464,2.427,4.882,4.882,0,0,0,1.154,1.772A4.915,4.915,0,0,0,5.45,21.475a7.337,7.337,0,0,0,2.427.464C8.944,21.988,9.285,22,12,22s3.057-.011,4.123-.061a7.333,7.333,0,0,0,2.428-.464,5.113,5.113,0,0,0,2.925-2.925,7.306,7.306,0,0,0,.464-2.427c.049-1.067.06-1.407.06-4.123s-.011-3.057-.06-4.123A7.326,7.326,0,0,0,21.476,5.45ZM20.141,16.041A5.52,5.52,0,0,1,19.8,17.9a3.31,3.31,0,0,1-1.9,1.9,5.546,5.546,0,0,1-1.857.344c-1.054.048-1.371.058-4.042.058s-2.986-.01-4.04-.058A5.546,5.546,0,0,1,6.1,19.8a3.1,3.1,0,0,1-1.15-.748,3.092,3.092,0,0,1-.748-1.15,5.494,5.494,0,0,1-.344-1.857C3.812,14.987,3.8,14.671,3.8,12s.01-2.986.058-4.041A5.552,5.552,0,0,1,4.205,6.1a3.1,3.1,0,0,1,.748-1.15A3.072,3.072,0,0,1,6.1,4.2,5.494,5.494,0,0,1,7.96,3.86C9.014,3.811,9.331,3.8,12,3.8s2.987.011,4.042.059A5.552,5.552,0,0,1,17.9,4.2a3.31,3.31,0,0,1,1.9,1.9,5.494,5.494,0,0,1,.344,1.857C20.19,9.014,20.2,9.33,20.2,12S20.19,14.986,20.141,16.041Z"></path>
          </g>
        </svg>
      ),
    },
    {
      type: 'TikTok',
      fetch: props.userData().tiktok,
      svg: (
        <svg
          class="w-5 h-5 text-gray-500"
          width="160px"
          height="160px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {' '}
            <path
              d="M21 7.33333C17.5307 7.33333 14.0204 5.31371 14.0204 2"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{' '}
            <path
              d="M8.5102 11.4737C5.467 11.4737 3 13.8301 3 16.7368C3 19.6436 5.467 22 8.5102 22C11.5534 22 14.0204 19.6436 14.0204 16.7368V2"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{' '}
          </g>
        </svg>
      ),
    },
    {
      type: 'Twitter',
      fetch: props.userData().twitter,
      svg: (
        <svg
          class="w-5 h-5 text-gray-500"
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
          width="160px"
          height="160px"
          viewBox="0 0 31.812 26"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {' '}
            <path d="M20.877,2.000 C22.519,2.000 24.382,2.652 25.426,3.738 C26.724,3.486 27.949,3.025 29.050,2.386 C28.625,3.687 27.718,4.779 26.540,5.469 C27.693,5.332 28.797,5.035 29.820,4.590 C29.054,5.707 28.087,6.690 26.971,7.477 C26.981,7.715 26.987,7.955 26.987,8.195 C26.987,15.562 21.445,24.000 10.939,24.000 C7.715,24.000 4.507,23.133 1.982,21.551 C2.428,21.605 2.883,21.631 3.343,21.631 C6.019,21.631 8.482,20.740 10.439,19.242 C7.937,19.199 5.827,17.586 5.103,15.373 C5.450,15.437 5.810,15.473 6.178,15.473 C6.696,15.473 7.203,15.406 7.681,15.277 C5.068,14.768 3.100,12.514 3.100,9.813 C3.100,9.787 3.100,9.764 3.100,9.740 C3.871,10.158 4.750,10.410 5.687,10.440 C4.154,9.437 3.147,7.734 3.147,5.799 C3.147,4.777 3.428,3.818 3.919,2.998 C6.735,6.367 10.945,8.588 15.693,8.822 C15.594,8.414 15.543,7.984 15.543,7.553 C15.543,4.473 17.721,2.000 20.877,2.000 M29.820,4.590 L29.825,4.590 M20.877,-0.000 C17.033,-0.000 14.060,2.753 13.614,6.552 C10.425,5.905 7.524,4.204 5.440,1.711 C5.061,1.257 4.503,0.998 3.919,0.998 C3.867,0.998 3.815,1.000 3.763,1.004 C3.123,1.055 2.547,1.413 2.216,1.966 C1.525,3.122 1.159,4.447 1.159,5.799 C1.159,6.700 1.321,7.579 1.625,8.400 C1.300,8.762 1.113,9.238 1.113,9.740 L1.113,9.813 C1.113,11.772 1.882,13.589 3.160,14.952 C3.087,15.294 3.103,15.655 3.215,15.998 C3.657,17.348 4.459,18.510 5.499,19.396 C4.800,19.552 4.079,19.631 3.343,19.631 C2.954,19.631 2.577,19.609 2.222,19.565 C2.141,19.556 2.061,19.551 1.981,19.551 C1.148,19.551 0.391,20.078 0.108,20.886 C-0.202,21.770 0.140,22.753 0.932,23.249 C3.764,25.023 7.318,26.000 10.939,26.000 C17.778,26.000 22.025,22.843 24.383,20.195 C27.243,16.984 28.907,12.718 28.972,8.455 C29.899,7.682 30.717,6.790 31.410,5.792 C31.661,5.458 31.810,5.041 31.810,4.590 C31.810,3.909 31.473,3.308 30.958,2.946 C31.181,2.176 30.925,1.342 30.303,0.833 C29.940,0.537 29.496,0.386 29.049,0.386 C28.708,0.386 28.365,0.474 28.056,0.654 C27.391,1.040 26.680,1.344 25.931,1.562 C24.555,0.592 22.688,-0.000 20.877,-0.000 L20.877,-0.000 Z"></path>{' '}
          </g>
        </svg>
      ),
    },
  ]);

  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              Status
            </th>
            <th scope="col" class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <For each={socials()}>
            {(s) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {s.svg}
                  <div class="pl-3">
                    <div class="text-base font-semibold">{s.type}</div>
                    <div class="font-normal text-gray-500">{s.fetch}</div>
                  </div>
                </th>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                    <span class="bg-gray-100 text-gray-800 text-sm font-semibold inline-flex items-center p-1.5 rounded-full mr-2 dark:bg-gray-700 dark:text-gray-300">
                      {s.fetch === null ? (
                        <svg
                          aria-hidden="true"
                          class="w-3.5 h-3.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      ) : (
                        <svg
                          class="h-3.5 w-3.5"
                          width="160px"
                          height="160px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {' '}
                            <path
                              d="M19 5L4.99998 19M5.00001 5L19 19"
                              stroke="#000000"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>{' '}
                          </g>
                        </svg>
                      )}
                      <span class="sr-only">Icon description</span>
                    </span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <a href="#" class="font-medium text-black hover:underline">
                    Edit
                  </a>
                </td>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    </div>
  );
};

export default BrandSocialCard;
