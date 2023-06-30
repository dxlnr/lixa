import { Component, JSXElement, createSignal } from 'solid-js';

import CopyIcon from '../svgs/copy_icon';
import TerminalIcon from '../svgs/terminal_icon';

const ClipboardButton: Component<{ svg: string }> = (props) => {
  const [fillColor, setFillColor] = createSignal('#000000');

  return (
    <>
      <button
        type="button"
        class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 
            focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium 
            rounded-lg text-sm px-1.5 py-1 text-center mr-2 mb-2"
        onMouseOut={() => setFillColor('#000000')}
        onMouseOver={() => setFillColor('#ffffff')}
        onClick={props.onClick}
      >
        {props.svg === 'copy' ? (
          <CopyIcon styling="w-4 h-4" stroke={fillColor()} />
        ) : (
          <TerminalIcon styling="w-4 h-4" stroke={fillColor()} />
        )}
      </button>
    </>
  );
};

export default ClipboardButton;
