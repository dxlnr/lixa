import { createEffect, createResource, createSignal } from 'solid-js';
import { on } from 'solid-js/dom';


const getImages = async () => {
    const res = await fetch('');

    return res.json()
}

const Gallery = () => {
    const [prompt, setPrompt] = createSignal('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            prompt: prompt(),
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
        console.log(blob);
        return blob
    };

    const [imgs] = createResource(event, handleSubmit);

    return (
        <div class="container mx-auto pr-2 pl-2 pb-2">
          <div class="flex flex-col">
            <div>
              <form onSubmit={handleSubmit}>
                <input type="text" id="input-group-1" class="w-full placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow-lg outline-none focus:outline-none focus:ring ring-slate-400 px-3 py-3 h-12 mr-2" placeholder="prompt" value={prompt()} onInput={(e) => setPrompt(e.target.value)}/>
              </form>
            </div>
            <div class="bg-white rounded-sm shadow-xl flex flex-wrap">
              <div class="flex w-1/2 flex-wrap">
                <For each={imgs()}>
                  {(i) => (
                    <div class="w-full p-2 md:p-4">
                      <img
                        alt="gallery"
                        class="block h-full w-full rounded-lg object-cover object-center"
                        src={i} />
                    </div>
                  )}
                </For>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Gallery;
