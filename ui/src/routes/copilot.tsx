import { Component } from 'solid-js';

import Navbar from '../components/navbar/navbar';
import Sidebar from '../components/sidebar/sidebar';

const Copilot: Component = () => {
  return (
    <>
      <Navbar />
      <div class="bg-stone-100 h-screen flex flex-col h-9/10 justify-between p-2">
        <div class="">
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Copilot;
