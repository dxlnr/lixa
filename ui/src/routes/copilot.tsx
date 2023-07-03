import { Component, createSignal } from 'solid-js';

import Navbar from '../components/navbar/navbar';
import Sidebar from '../components/sidebar/sidebar';
import Gallery from '../components/gallery/gallery';
import ChatContainer from '../components/gallery/chat';
import SuggestionContainer from '../components/gallery/suggestions';

const Copilot: Component = () => {
  // const [prompt, setPrompt] = createSignal('');
  const [visible, setVisible] = createSignal(true);
  const [chatVisible, setChatVisible] = createSignal(false);

  return (
    <div class="h-screen bg-gray-100">
      <Navbar />
      <div class="flex justify-between p-2">
        <Sidebar
          visible={visible}
          setVisible={setVisible}
          chatVisible={chatVisible}
          setChatVisible={setChatVisible}
        />

        <div class="container mx-auto pr-2 pl-2 pb-2">
          <div class="grid grid-rows-2 grid-cols-5 gap-4">
            <div class="col-span-3 flex flex-col">
              {visible() && <Gallery />}
            </div>
            <div class="col-span-2">{visible() && <SuggestionContainer />}</div>
            <div class="col-start-4 col-span-2 flex flex-col">
              {chatVisible() && <ChatContainer />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copilot;
