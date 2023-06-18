import { Component, For, createSignal } from 'solid-js';

import InstagramLogo from '../svgs/instagram_logo';
import TikTokLogo from '../svgs/tiktok_logo';
import TwitterLogo from '../svgs/twitter_logo';
import WebsiteLogo from '../svgs/website_logo';
import EditableRow from './editableRow.tsx';

const BrandSocialCard: Component = (props) => {
  const [editSocials, setEditSocials] = createSignal(null);
  const [socials, setSocials] = createSignal([
    {
      type: 'Website',
      fetch: props.userData().website,
      svg: <WebsiteLogo styling="w-4 h-5 text-gray-500" />,
    },
    {
      type: 'Instagram',
      fetch: props.userData().instagram,
      svg: <InstagramLogo styling="w-5 h-5 text-gray-500" />,
    },
    {
      type: 'TikTok',
      fetch: props.userData().tiktok,
      svg: <TikTokLogo styling="w-5 h-5 text-gray-500" />,
    },
    {
      type: 'Twitter',
      fetch: props.userData().twitter,
      svg: <TwitterLogo styling="w-5 h-5 text-gray-500" />,
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
              <>
                {editSocials() === s.type ? (
                  <EditableRow svg={s.svg} setEditSocials={setEditSocials} />
                ) : (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {s.svg}
                      <div class="pl-3">
                        <div class="text-base font-semibold">{s.type}</div>
                        <a href={s.fetch}>
                          <div class="font-normal text-gray-500 hover:underline hover:text-c-lixa-s">
                            {s.fetch}
                          </div>
                        </a>
                      </div>
                    </th>
                    <td class="px-6 py-4">
                      <div class="flex items-center">
                        <span class="bg-gray-100 text-gray-800 text-sm font-semibold inline-flex items-center p-1.5 rounded-full mr-2 dark:bg-gray-700 dark:text-gray-300">
                          <Show
                            when={s.fetch}
                            fallback={
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
                            }
                          >
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
                          </Show>
                          <span class="sr-only">Icon description</span>
                        </span>
                      </div>
                    </td>
                    <td class="px-6 py-4">
                      <button
                        class="font-medium text-black hover:underline"
                        onClick={() => setEditSocials(s.type)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                )}
              </>
            )}
          </For>
        </tbody>
      </table>
    </div>
  );
};

export default BrandSocialCard;
