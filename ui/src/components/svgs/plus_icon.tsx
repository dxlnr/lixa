import { Component } from 'solid-js';

type IconProps = {
  styling?: string;
};

const PlusIcon: Component<IconProps> = (props) => {
  return (
    <>
      <svg
        class={props.styling}
        fill="#000000"
        width="160px"
        height="160px"
        viewBox="0 0 32 32"
        version="1.1"
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
          <title>add</title>{' '}
          <path d="M24 18h-6v6h-4v-6h-6v-4h6v-6h4v6h6v4z"></path>{' '}
        </g>
      </svg>
    </>
  );
};

export default PlusIcon;
