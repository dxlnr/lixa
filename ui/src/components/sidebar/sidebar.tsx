import { Component } from 'solid-js';

import PromptIcon from '../svgs/prompt_icon';
import UploadIcon from '../svgs/upload_icon';
import ChatIcon from '../svgs/chat_icon';

type SidebarProps = {
  setVisible?: string;
  setChatVisible?: string;
};

const Sidebar: Component<SidebarProps> = (props) => {
  return (
    <aside
      id="sidebar-multi-level-sidebar"
      class="left-0 z-40 w-min transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div class="flex flex-col">
        <div class="flex-none">
          <div class="flex flex-row">
            <button
              type="button"
              class="bg-white text-black hover:bg-slate-300 shadow-lg shadow-black-500/50 
                font-medium rounded-md text-md px-5 py-2.5 text-center mr-2 mb-2"
              onClick={() => props.setVisible(!props.visible())}
            >
              <PromptIcon styling="w-7 h-7" />
            </button>
          </div>
        </div>
        <div class="flex-none">
          <button
            type="button"
            class="bg-white text-black hover:bg-slate-300 shadow-lg shadow-black-500/50 
                font-medium rounded-md text-md px-5 py-2.5 text-center mr-2 mb-2"
            onClick={() => props.setChatVisible(!props.chatVisible())}
          >
            <ChatIcon styling="w-7 h-7" />
          </button>
        </div>
        <div class="flex-none">
          <button
            type="button"
            class="bg-white text-black hover:bg-slate-300 hover:bg-gradient-to-br 
            shadow-lg shadow-black-500/50 rounded-md text-md px-5 py-2.5 text-center mr-2 mb-2"
          >
            <UploadIcon styling="w-7 h-7" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
