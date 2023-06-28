import { createSignal } from 'solid-js';
import { on } from 'solid-js/dom';
import { API_BASE } from '../../api';
import { useAuth0 } from '../auth0-solidjs';

const SuggestionContainer = () => {
  const { state: auth } = useAuth0();
  const [suggestion, setSuggestion] = createSignal('');

  const fetchData = async () => {
    const response = await fetch(`${API_BASE}/copilot/suggest_prompts`);
    const reader = response.body.getReader();
    let text = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      text += new TextDecoder('utf-8').decode(value);
      setSuggestion(text);
    }
  };

  return (
    <div class="bg-white rounded-sm shadow-xl flex flex-col ">
      <div class="flex items-center justify-end px-3 py-3">
        <button
          type="submit"
          class="text-black text-sm font-bold"
          onClick={fetchData}
        >
          Generate Suggestions
        </button>
      </div>
      {suggestion() !== '' && (
        <div class="p-4 text-gray-800 border border-t-gray-200">
          <p class="text-gray-600"> {suggestion()} </p>
        </div>
      )}
    </div>
  );
};

export default SuggestionContainer;
