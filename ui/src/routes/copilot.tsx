import { Component, createSignal } from 'solid-js';

import Navbar from '../components/navbar/navbar';
import Sidebar from '../components/sidebar/sidebar';
import Gallery from '../components/gallery/gallery';

import { createVisibleSignal } from '../components/helper';

const Copilot: Component = () => {
  const [visible, setVisible] = createSignal(true);

  return (
    <div class="h-screen bg-gray-100">
      <Navbar />
      <div class="flex justify-between p-2">
        <Sidebar visible={visible} setVisible={setVisible} />
        {visible() && <Gallery />}
      </div>
    </div>
  );
};

export default Copilot;
