import { createEffect, createResource, createSignal } from 'solid-js';
import { on } from 'solid-js/dom';
import { API_BASE } from '../../api';
import { useAuth0 } from '../auth0-solidjs';

import SuggestionContainer from './suggestions';
import LoadingIcon from '../svgs/loading_icon';
import SaveIcon from '../svgs/save_icon';

const Gallery = () => {
  const { state: auth } = useAuth0();
  const [prompt, setPrompt] = createSignal('');
  const [blob, setBlob] = createSignal(null);
  const [user, setUser] = createSignal(auth.user?.email);

  const handleSubmit = async (prompt) => {
    if (prompt) {
      const formData = new FormData();
      formData.append('prompt', prompt);

      const response = await fetch(`${API_BASE}/copilot/create_image`, {
        method: 'POST',
        body: formData,
      });
      const blob = await response.blob();
      setBlob(blob);
      return URL.createObjectURL(blob);
    } else {
      return null;
    }
  };

  const saveImage = async () => {
    if (imgs) {
      const uploadImage = new FormData();

      uploadImage.append('user', user());
      var im = blob();
      uploadImage.append('file', im, 'tmp.jpg');

      const response = await fetch(`${API_BASE}/copilot/save_image`, {
        method: 'POST',
        body: uploadImage,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Image saved:', data);
        })
        .catch((error) => {
          console.error('Error saving image:', error);
        });
    }
  };

  const [imgs] = createResource(prompt, handleSubmit);

  return (
    <div class="container mx-auto pr-2 pl-2 pb-2">
      <div class="grid grid-cols-5 gap-4">
        <div class="col-span-3 flex flex-col">
          <div class="relative flex flex-wrap items-center">
            <textarea
              type="text"
              id="input-group-1"
              class="flex-grow placeholder-slate-300 text-slate-600 bg-white 
                rounded text-sm border-0 shadow-lg outline-none focus:outline-none 
                focus:ring ring-slate-400 pl-3 pr-22 py-3 h-12 w-auto resize-y"
              placeholder="prompt"
              value={prompt()}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button
              type="submit"
              class="text-black absolute right-2.5 text-sm font-bold px-2 py-2"
              value={prompt()}
              onSubmit={(e) => setPrompt(e.target.value)}
            >
              Generate
            </button>
          </div>
          <div class="bg-white rounded-sm shadow-xl flex flex-wrap justify-center">
            <div class="flex flex-wrap">
              {imgs.loading && (
                <div role="status" class="space-y-8 animate-pulse p-2">
                  <div class="h-full w-full ">
                    <LoadingIcon styling="w-8 h-8" />
                  </div>
                </div>
              )}
              {prompt() && (
                <div class="p-2 md:p-4">
                  <img
                    alt=""
                    class="block h-full w-full rounded-md object-cover object-center"
                    src={imgs()}
                  />
                </div>
              )}
            </div>
          </div>
          {imgs() !== null ? (
            <div class="bg-white justify-end flex p-1">
              <button
                type="button"
                class="flex-none bg-white text-black hover:bg-slate-300 shadow-lg 
                    shadow-black-500/50 rounded-md text-md px-5 py-2.5 text-center mr-2 mb-2"
                onClick={saveImage}
              >
                <SaveIcon styling="w-7 h-7" />
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
        <SuggestionContainer setPrompt={setPrompt} />
      </div>
    </div>
  );
};

export default Gallery;
