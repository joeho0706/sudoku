# Sudoku

數獨遊戲基本框架（方案 B：Vite + 原生 JS，ES module 分檔）。只有骨架，未實作遊戲邏輯。

## 啟動方式

```bash
npm install
npm run dev      # dev server：http://localhost:5173
npm run build    # 產出純靜態 dist/
```

預覽 build 結果：`npm run preview`

## 目錄

```
sudoku/
├─ index.html        入口頁
├─ package.json      scripts 同 devDependencies（只有 vite）
├─ vite.config.js    Vite 設定（server.port 5173）
├─ README.md
└─ src/
   ├─ main.js        唯一進入點：組裝
   ├─ state.js       棋盤容器（9x9 空陣列 + get/set cell）
   ├─ ui.js          純 render（讀 state 畫格線）
   └─ style.css      樣式（CSS Grid，粗線分 3x3 宮）
```

## 模組邊界

1. `ui.js` 只讀 `state.js`，唔會反向寫 state；`main.js` 係唯一協調者。
2. 唔含遊戲規則：無求解器、無衝突偵測、無難度、無計時（按用戶要求刻意保持簡單）。
3. 無測試框架、無 CI/CD、無資料庫、無認證。
