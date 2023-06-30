import { createSignal } from 'solid-js';
import { on } from 'solid-js/dom';
import { API_BASE } from '../../api';
import { useAuth0 } from '../auth0-solidjs';

import ClipboardButton from '../buttons/clipboardButton';
import CopyIcon from '../svgs/copy_icon';
import TerminalIcon from '../svgs/terminal_icon';

const SuggestionContainer = (props) => {
  const { state: auth } = useAuth0();
  const [suggestion, setSuggestion] = createSignal('');
  const [message, setMessage] = createSignal('');
  const [showMessage, setShowMessage] = createSignal(false);

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

  const displayMessage = (msg: string, duration: number) => {
    setMessage(msg);
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, duration);
  };

  function handleClick() {
    const textField = document.createElement('textarea');
    textField.innerText = suggestion();
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    displayMessage('copied to clipboard', 5000);
  }

  const handleUseClick = () => {
    props.setPrompt(suggestion());
    displayMessage('copied to prompt', 5000);
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
        <div class="mx-4 py-4 border-t border-gray-200">
          <p
            class="text-gray-600 hover:text-c-lixa-s text-md"
            ondblclick={handleUseClick}
            onClick={handleClick}
          >
            {' '}
            {suggestion()}{' '}
          </p>

          <div class="flex flex-row justify-end mt-4 opacity-40 items-center">
            {showMessage() && (
              <div>
                <p class="px-2 text-sm text-green-500">{message()}</p>
              </div>
            )}
            <div>
              <ClipboardButton svg="copy" onClick={handleClick} />
            </div>
            <div>
              <ClipboardButton onClick={handleUseClick} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuggestionContainer;
