import { createSignal } from 'solid-js';
import { on } from 'solid-js/dom';
import { API_BASE } from '../../api';
import { useAuth0 } from '../auth0-solidjs';

import CopyIcon from '../svgs/copy_icon';
import TerminalIcon from '../svgs/terminal_icon';

const SuggestionContainer = (props) => {
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

  function handleDoubleClick() {
    const textField = document.createElement('textarea');
    textField.innerText = suggestion();
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  }

  const handleUseClick = () => {
    props.setPrompt(suggestion());
  };

  return (
    <div
      class={
        'col-span-2 bg-white shadow-xl flex flex-col ' +
        (suggestion() == '' ? 'rounded' : 'rounded-t')
      }
    >
      <div class="flex my-auto justify-end">
        <button
          type="submit"
          class="text-black text-sm font-bold p-3.5"
          onClick={fetchData}
        >
          Generate Suggestions
        </button>
      </div>
      {suggestion() !== '' && (
        <div class="p-4">
          <p
            class="text-gray-400 hover:text-c-lixa-s"
            ondblclick={handleUseClick}
          >
            {' '}
            {suggestion()}{' '}
          </p>

          <div class="flex flex-row justify-end">
            <div>
              <CopyIcon styling="w-6 h-6" />{' '}
            </div>
            <div>
              <TerminalIcon styling="w-6 h-6" />{' '}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuggestionContainer;
