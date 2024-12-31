# Vue 3 + Vite + PrimeVue 3.53 + TailwindCSS 專案模板

這是一個基於 Vue 3 生態系統打造的現代化前端開發模板。整合了 Vite 建構工具帶來的快速開發體驗，PrimeVue 3.53 提供的豐富 UI 元件，以及 TailwindCSS 樣式設計系統。此模板已預先配置好開發所需的必要工具，讓您能夠專注在應用程式的開發上，無需花費時間在環境設定。

## 注意事項

截至 2024/12/30，PrimeVue 4 的版本已經發布，所以此模板暫時不升級 PrimeVue 版本，其他相關套件也暫時不升級。

## 技術棧

- Vue 3
- Pinia (狀態管理)
- PrimeVue (UI 元件庫)
- Tailwind CSS (樣式框架)
- Vite (建構工具)
- Pinia 狀態管理
- Vue Router
- Vitest 測試框架


## 功能特色

- 自動引入元件
- ESLint + Prettier 程式碼規範
- Stylelint CSS 規範

## 開始使用

### 環境需求

- Node.js 18+ 
- pnpm 9+

### 安裝

```sh
pnpm install
```

### 開發

```sh
pnpm run dev
```

### 建置

```sh
pnpm run build
```

## 開發工具建議

- VSCode
- 建議安裝的擴充功能：
  - Volar (Vue 3)
  - ESLint
  - Prettier
  - Vitest
  - Code Spell Checker
  - Stylelint

## 開發規範

- ESLint 進行程式碼品質控管
- Prettier 統一程式碼格式
- Stylelint 進行 CSS/SCSS 程式碼規範檢查


## 設定檔說明

- `.eslintrc`: ESLint 規則
- `.prettierrc`: Prettier 格式化規則  
- `.stylelintrc`: Stylelint CSS 規則
- `vite.config.js`: Vite 設定
- `tailwind.config.js`: Tailwind CSS 設定
