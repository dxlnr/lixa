import { Component, createSignal } from 'solid-js';

import Navbar from '../components/navbar/navbar';
import Sidebar from '../components/sidebar/sidebar';
import Gallery from '../components/gallery/gallery';
import ChatContainer from '../components/gallery/chat';

const Copilot: Component = () => {
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
        <div class="flex flex-col w-full">
        {visible() && <Gallery />}
        {chatVisible() && <ChatContainer />}
        </div>
      </div>
    </div>
  );
};

export default Copilot;
