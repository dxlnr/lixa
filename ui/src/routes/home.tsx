import { A } from "@solidjs/router";

import Sidebar from "../components/sidebar/sidebar";
import Gallery from "../components/gallery/gallery";

const Home: Component = () => {
  return (
    <div class="bg-slate-50 h-screen flex flex-col h-9/10 justify-between p-2">
      <div class="flex flex-row">
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
