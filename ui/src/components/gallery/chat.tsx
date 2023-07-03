import { Component, createSignal } from 'solid-js';

const ChatContainer: Component = (props) => {
  const [message, setMessage] = createSignal('');
  const [answer, setAnswer] = createSignal('');

  return (
    <>
      {answer() !== '' && (
        <div class="flex flex-col text-sm">
          <div class="group w-full text-gray-800 dark:text-gray-100">
            <div class="flex p-4 gap-4 text-base md:gap-6 md:max-w-2xl lg:max-w-[38rem] xl:max-w-3xl md:py-6 lg:px-0 m-auto">
              <div class="relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]">
                <div class="flex flex-grow flex-col gap-3">
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div>
        <div class="relative flex flex-wrap items-center">
          <textarea
            id="input-group-1"
            class="flex-grow placeholder-slate-300 text-slate-600 bg-white 
                rounded text-md border-0 shadow-lg outline-none focus:outline-none 
                focus:ring-1 ring-slate-400 pl-3 py-3 pr-28 h-12 resize-none overflow-y-auto"
            tabindex="0"
            placeholder="Send a message"
          />
          <button
            type="submit"
            class="text-black absolute right-2.5 text-sm font-bold px-2 py-2"
          >
            Chat
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatContainer;
