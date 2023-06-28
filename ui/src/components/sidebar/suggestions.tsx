import { createSignal } from 'solid-js';
import { on } from 'solid-js/dom';
import { API_BASE } from '../../api';
import { useAuth0 } from '../auth0-solidjs';

const SuggestionContainer = () => {
  const { state: auth } = useAuth0();
  const [suggestion, setSuggestion] = createSignal("");

  const fetchData = async () => {
    const response = await fetch(`${API_BASE}/copilot/suggest_prompts`); 
    const reader = response.body.getReader();
    let text = '';
  
    while (true) {
      console.log(text);
      const { done, value } = await reader.read();
      if (done) {
        setSuggestion(text);
        break;
      }
      text += new TextDecoder("utf-8").decode(value);
    }
  }

  return (
    <div class="container mx-auto pr-2 pl-2 pb-2">
      <div class="flex flex-col">
        <div class="relative flex items-center">
          <h1> Suggestions: </h1>
          <button
            type="submit"
            class="text-black bg-yellow-100 absolute right-2.5 text-sm font-bold px-2 py-2"
            onClick={fetchData}
          >
            Generate Prompt Suggestions
          </button>

          <p> { suggestion() } </p>
        </div>
      </div>
    </div>
  );
};

export default SuggestionContainer;
