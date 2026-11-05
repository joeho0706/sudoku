// 棋盤容器：只存資料，唔含任何遊戲規則。
export const SIZE = 9;

export function createBoard() {
  return Array.from({ length: SIZE }, () => Array(SIZE).fill(null));
}

export function createState() {
  return { board: createBoard() };
}

export function getCell(state, row, col) {
  return state.board[row][col];
}

export function setCell(state, row, col, value) {
  state.board[row][col] = value;
  return state;
}
