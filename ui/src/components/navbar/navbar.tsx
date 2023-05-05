import { Routes, Route, A } from "@solidjs/router";
import logo from "../../assets/logo.svg";
import pp from "../../assets/pp.jpg";

const Navbar = () => {
  return (
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="flex flex-wrap items-center justify-between mx-2 p-5">
        <A href="https://lixa.ai" class="flex items-center"> 
            <img src={logo} class="h-10 mr-3" alt="logo" />
        </A>
        <div class="flex items-center md:order-2">
            <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <img class="w-12 h-12 rounded-full" src={pp} alt="user photo" />
            </button>
        </div>
        </div>
    </nav>
  );
};

export default Navbar;
