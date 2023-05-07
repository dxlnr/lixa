import { Routes, Route, A } from "@solidjs/router";
import { createSignal } from 'solid-js';
import { on } from 'solid-js/dom';

import Gallery from "../../components/gallery/gallery";


const Sidebar = () => {
    const [showElement, setShowElement] = createSignal(false);

    function handleClick() {
        setShowElement(!showElement());
    }

    return (
        <aside id="sidebar-multi-level-sidebar" class="left-0 z-40 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div class="flex flex-col">
          <div class="flex-none">
            <div class="flex flex-row">
              <button type="button" class="bg-white text-black hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-black-800 shadow-lg shadow-black-500/50 dark:shadow-lg dark:shadow-black-800/80 font-medium rounded-md text-md px-5 py-2.5 text-center mr-2 mb-2" onClick={handleClick}>
            
                <svg class="w-7 h-7" width="160px" height="160px" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>edit_text_bar [#1373]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-339.000000, -800.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M286.15,654 C285.5704,654 285.1,653.552 285.1,653 L285.1,647 C285.1,646.448 285.5704,646 286.15,646 C286.7296,646 287.2,645.552 287.2,645 C287.2,644.448 286.7296,644 286.15,644 L285.1,644 C283.93975,644 283,644.895 283,646 L283,654 C283,655.105 283.93975,656 285.1,656 L286.15,656 C286.7296,656 287.2,655.552 287.2,655 C287.2,654.448 286.7296,654 286.15,654 M301.9,644 L294.55,644 C293.9704,644 293.5,644.448 293.5,645 C293.5,645.552 293.9704,646 294.55,646 L300.85,646 C301.4296,646 301.9,646.448 301.9,647 L301.9,653 C301.9,653.552 301.4296,654 300.85,654 L294.55,654 C293.9704,654 293.5,654.448 293.5,655 C293.5,655.552 293.9704,656 294.55,656 L301.9,656 C303.06025,656 304,655.105 304,654 L304,646 C304,644.895 303.06025,644 301.9,644 M293.5,659 C293.5,659.552 293.0296,660 292.45,660 L288.25,660 C287.6704,660 287.2,659.552 287.2,659 C287.2,658.448 287.6704,658 288.25,658 L289.3,658 L289.3,642 L288.25,642 C287.6704,642 287.2,641.552 287.2,641 C287.2,640.448 287.6704,640 288.25,640 L292.45,640 C293.0296,640 293.5,640.448 293.5,641 C293.5,641.552 293.0296,642 292.45,642 L291.4,642 L291.4,658 L292.45,658 C293.0296,658 293.5,658.448 293.5,659" id="edit_text_bar-[#1373]"> </path> </g> </g> </g> </g></svg>
              </button>
              {showElement() && ( <Gallery />)}
            </div>
          </div>
           <div class="flex-none">
            <button type="button" class="flex-none bg-white text-black hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-black-800 shadow-lg shadow-black-500/50 dark:shadow-lg dark:shadow-black-800/80 font-medium rounded-md text-md px-5 py-2.5 text-center mr-2 mb-2">
                <svg class="w-7 h-7" width="160px" height="160px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 8C15.4477 8 15 8.44772 15 9C15 9.55228 15.4477 10 16 10V8ZM8 10C8.55228 10 9 9.55228 9 9C9 8.44772 8.55228 8 8 8V10ZM5.07805 19.7748L4.61708 20.6622L4.61708 20.6622L5.07805 19.7748ZM4.22517 18.9219L5.11259 18.461L5.11259 18.461L4.22517 18.9219ZM19.7748 18.9219L20.6622 19.3829L19.7748 18.9219ZM18.9219 19.7748L19.3829 20.6622L18.9219 19.7748ZM19.7748 10.0781L20.6622 9.61708L20.6622 9.61708L19.7748 10.0781ZM18.9219 9.22517L18.461 10.1126H18.461L18.9219 9.22517ZM4.22517 10.0781L3.33776 9.61708L4.22517 10.0781ZM5.07805 9.22517L4.61708 8.33776L5.07805 9.22517ZM11 14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14H11ZM12 4L12.7071 3.29289C12.3166 2.90237 11.6834 2.90237 11.2929 3.29289L12 4ZM13.7929 7.20711C14.1834 7.59763 14.8166 7.59763 15.2071 7.20711C15.5976 6.81658 15.5976 6.18342 15.2071 5.79289L13.7929 7.20711ZM8.79289 5.79289C8.40237 6.18342 8.40237 6.81658 8.79289 7.20711C9.18342 7.59763 9.81658 7.59763 10.2071 7.20711L8.79289 5.79289ZM19 12.22V16.78H21V12.22H19ZM16.78 19H7.22V21H16.78V19ZM5 16.78V12.22H3V16.78H5ZM16 10H16.78V8H16V10ZM7.22 10H8V8H7.22V10ZM7.22 19C6.63372 19 6.25517 18.9992 5.96722 18.9753C5.69125 18.9524 5.58924 18.9135 5.53903 18.8874L4.61708 20.6622C5.00034 20.8613 5.39982 20.935 5.8017 20.9684C6.19162 21.0008 6.66729 21 7.22 21V19ZM3 16.78C3 17.3327 2.9992 17.8084 3.03158 18.1983C3.06495 18.6002 3.13867 18.9997 3.33776 19.3829L5.11259 18.461C5.0865 18.4108 5.04763 18.3088 5.02472 18.0328C5.0008 17.7448 5 17.3663 5 16.78H3ZM5.53903 18.8874C5.35638 18.7925 5.20746 18.6436 5.11259 18.461L3.33776 19.3829C3.62239 19.9309 4.06915 20.3776 4.61708 20.6622L5.53903 18.8874ZM19 16.78C19 17.3663 18.9992 17.7448 18.9753 18.0328C18.9524 18.3088 18.9135 18.4108 18.8874 18.461L20.6622 19.3829C20.8613 18.9997 20.935 18.6002 20.9684 18.1983C21.0008 17.8084 21 17.3327 21 16.78H19ZM16.78 21C17.3327 21 17.8084 21.0008 18.1983 20.9684C18.6002 20.935 18.9997 20.8613 19.3829 20.6622L18.461 18.8874C18.4108 18.9135 18.3088 18.9524 18.0328 18.9753C17.7448 18.9992 17.3663 19 16.78 19V21ZM18.8874 18.461C18.7925 18.6436 18.6436 18.7925 18.461 18.8874L19.3829 20.6622C19.9309 20.3776 20.3776 19.9309 20.6622 19.3829L18.8874 18.461ZM21 12.22C21 11.6673 21.0008 11.1916 20.9684 10.8017C20.935 10.3998 20.8613 10.0003 20.6622 9.61708L18.8874 10.539C18.9135 10.5892 18.9524 10.6912 18.9753 10.9672C18.9992 11.2552 19 11.6337 19 12.22H21ZM16.78 10C17.3663 10 17.7448 10.0008 18.0328 10.0247C18.3088 10.0476 18.4108 10.0865 18.461 10.1126L19.3829 8.33776C18.9997 8.13867 18.6002 8.06495 18.1983 8.03158C17.8084 7.9992 17.3327 8 16.78 8V10ZM20.6622 9.61708C20.3776 9.06915 19.9309 8.62239 19.3829 8.33776L18.461 10.1126C18.6436 10.2075 18.7925 10.3564 18.8874 10.539L20.6622 9.61708ZM5 12.22C5 11.6337 5.0008 11.2552 5.02472 10.9672C5.04763 10.6912 5.0865 10.5892 5.11259 10.539L3.33776 9.61708C3.13867 10.0003 3.06495 10.3998 3.03158 10.8017C2.9992 11.1916 3 11.6673 3 12.22H5ZM7.22 8C6.66729 8 6.19162 7.9992 5.8017 8.03158C5.39981 8.06495 5.00034 8.13867 4.61708 8.33776L5.53903 10.1126C5.58924 10.0865 5.69125 10.0476 5.96722 10.0247C6.25517 10.0008 6.63372 10 7.22 10V8ZM5.11259 10.539C5.20746 10.3564 5.35638 10.2075 5.53903 10.1126L4.61708 8.33776C4.06915 8.62239 3.62239 9.06915 3.33776 9.61708L5.11259 10.539ZM13 14L13 4L11 4L11 14H13ZM11.2929 4.70711L13.7929 7.20711L15.2071 5.79289L12.7071 3.29289L11.2929 4.70711ZM11.2929 3.29289L8.79289 5.79289L10.2071 7.20711L12.7071 4.70711L11.2929 3.29289Z" fill="#000000"></path> </g></svg>
            </button>
          </div>
          <div class="flex-none">
            <button type="button" class="flex-none bg-white text-black hover:bg-slate-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-black-800 shadow-lg shadow-black-500/50 dark:shadow-lg dark:shadow-black-800/80 font-medium rounded-md text-md px-5 py-2.5 text-center mr-2 mb-2">
              <svg class="w-7 h-7" fill="#000000" width="160px" height="160px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>add</title> <path d="M24 18h-6v6h-4v-6h-6v-4h6v-6h4v6h6v4z"></path> </g></svg>
            </button>
          </div>
        </div>
        </aside>
    );
};

export default Sidebar;
