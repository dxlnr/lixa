import type { Component } from 'solid-js';

import Navbar from '../components/navbar/navbar';
import EmptyBrand from '../components/emptybrand/emptybrand';
// import GSidebar from '../components/sidebar/generalSidebar';

const Brand: Component = () => {
  return (
    <div>     
      <Navbar />
      <div class="m-auto">
        <EmptyBrand />
      </div>
    </div>
  );
};

export default Brand;
