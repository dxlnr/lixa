import { Component } from 'solid-js';

type LogoProps = {
  styling?: string;
};

const TikTokLogo: Component<LogoProps> = (props) => {
  return (
    <>
      <svg
        class={props.styling}
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
    </>
  );
};

export default TikTokLogo;
