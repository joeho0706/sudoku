// 唯一進入點：只做組裝，唔含任何遊戲規則。
import './style.css';
import { createState } from './state.js';
import { renderShell } from './ui.js';

const root = document.querySelector('#app');
const state = createState();

root.replaceChildren(renderShell(state));
