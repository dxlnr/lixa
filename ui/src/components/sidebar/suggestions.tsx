import { createSignal } from 'solid-js';
import { on } from 'solid-js/dom';
import { API_BASE } from '../../api';
import { useAuth0 } from '../auth0-solidjs';

const SuggestionContainer = () => {
  return (
    <div class="container mx-auto pr-2 pl-2 pb-2">
      <div class="flex flex-col"></div>
    </div>
  );
};

export default SuggestionContainer;
