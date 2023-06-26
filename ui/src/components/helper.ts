import { createSignal } from 'solid-js';

export function createVisibleSignal(initialState = false) {
  const [visible, setVisible] = createSignal(initialState);

  return {
    visible,
    toggle: () => setVisible(!visible()),
  };
}
