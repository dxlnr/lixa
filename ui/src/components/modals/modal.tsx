import { Component, JSX, createSignal } from 'solid-js';

type ModalProps = {
  children?: JSX.Element;
  button_text: string;
};

const Modal: Component<ModalProps> = (props) => {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <>
    <button 
      type="button" 
      class="text-white bg-[#050708] hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-8 py-3 text-center inline-flex items-center"
      onClick={() => setIsOpen(true)}>
      {props.button_text}
    </button>
    {isOpen() && (
      <>
      <div
        role="presentation"
        class=""
        onClick={() => setIsOpen(false)}
        onKeyPress={(e) => (e.key || e.code) === "Escape" ? setIsOpen(false) : null}
      />
      <section class="">
        <button
          type="button"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          onClick={() => setIsOpen(false)}
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
      </section>
      </>
      )}
    </>
  );
};

export default Modal;
