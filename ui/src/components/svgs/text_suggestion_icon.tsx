import { Component } from 'solid-js';

type IconProps = {
  styling?: string;
};

const TextSIcon: Component<IconProps> = (props) => {
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
            d="M4 17L10 11L4 5M12 19H20"
            stroke="#000000"
            stroke-width="2.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>{' '}
        </g>
      </svg>
    </>
  );
};

export default TextSIcon;
