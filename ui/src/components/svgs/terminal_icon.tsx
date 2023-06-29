import { Component } from 'solid-js';

type IconProps = {
  styling?: string;
};

const TerminalIcon: Component<IconProps> = (props) => {
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
          <path
            d="m4 18 6-6-6-6"
            stroke="#000000"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 18h8"
            stroke="#000000"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
          ></path>
        </g>
      </svg>
    </>
  );
};

export default TerminalIcon;
