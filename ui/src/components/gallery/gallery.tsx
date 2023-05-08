import { createEffect, createResource, createSignal } from 'solid-js';
import { on } from 'solid-js/dom';


const Gallery = () => {
    const [prompt, setPrompt] = createSignal('');

    const handleSubmit = async (prompt) => {
        if (prompt) {
            const formData = {
                prompt: prompt,
            };
            const response = await fetch('http://192.168.88.18:5000/api/copilot/prompt', {
              method: 'POST', 
              headers: {
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin':'*',
              },
              body: JSON.stringify(formData),
            });
            const blob = await response.blob();
            return URL.createObjectURL(blob)
        } else {
            return null;
        }
    };

    const [imgs] = createResource(prompt, handleSubmit);

    return (
        <div class="container mx-auto pr-2 pl-2 pb-2">
          <div class="flex flex-col">
            <div class="relative flex items-center">
                <input type="text" id="input-group-1" class="w-full placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow-lg outline-none focus:outline-none focus:ring ring-slate-400 px-3 py-3 h-12" placeholder="prompt" value={prompt()} onChange={(e) => setPrompt(e.target.value)}/>
                <button type="submit" class="text-black absolute right-2.5 text-sm font-bold px-2 py-2" value={prompt()} onSubmit={(e) => setPrompt(e.target.value)}>Generate</button>
            </div>
            <div class="bg-white rounded-sm shadow-xl flex flex-wrap">
              <div class="flex flex-wrap">
                {imgs.loading && (
                <div role="status" class="space-y-8 animate-pulse p-2">
                  <div class="h-full w-full ">
                    <svg class="w-8 h-8" width="160px" height="160px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10Z" fill="#000000"></path> <path d="M12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z" fill="#000000"></path> <path d="M21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14C20.1046 14 21 13.1046 21 12Z" fill="#000000"></path> </g></svg>
                  </div>
                </div>
                )}
                {prompt() && (
                <div class="p-2 md:p-4">
                  <img
                    alt=""
                    class="block h-full w-full rounded-md object-cover object-center"
                    src={imgs()} />
                </div>
                )}
              </div>
            </div>
          </div>
        </div>
    );
};

export default Gallery;
