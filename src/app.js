import { state } from './state.js';

const boot = () => {
  document.documentElement.dataset.app = 'relume-os';
  window.relumeState = state;
};

boot();
