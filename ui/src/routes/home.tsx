import { A } from "@solidjs/router";

import Sidebar from "../components/sidebar/sidebar";

const Home: Component = () => {
  return (
    <div class="bg-gray-100 h-screen flex flex-col h-9/10 justify-between p-2">
      <main class="mb-auto h-10 text-left">
        <Sidebar />
        <div class="font-2xl text-white ">
        </div>
      </main>
    </div>
  );
};

export default Home;
