// 純 render：只讀 state 畫畫面，唔會反過來改 state。
import { SIZE, getCell } from './state.js';

export function renderBoard(state) {
  const grid = document.createElement('div');
  grid.className = 'board';

  for (let row = 0; row < SIZE; row += 1) {
    for (let col = 0; col < SIZE; col += 1) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.row = String(row);
      cell.dataset.col = String(col);

      const value = getCell(state, row, col);
      cell.textContent = value === null || value === undefined ? '' : String(value);

      grid.append(cell);
    }
  }

  return grid;
}

export function renderShell(state) {
  const shell = document.createElement('div');
  shell.className = 'shell';

  const title = document.createElement('h1');
  title.className = 'title';
  title.textContent = 'Sudoku';

  shell.append(title, renderBoard(state));
  return shell;
}
