/** @type {import('tailwindcss').Config} */
import primeui from 'tailwindcss-primeui'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [primeui],
  darkMode: ['selector', '[class*="app-dark"]'],
  // 深色模式設定：
  // 深色主題套用規則：
  // - 只要 HTML 元素的 class 名稱有包含 "app-dark" 就會啟用深色主題
  // - 舉例來說：
  //   <div class="header-app-dark"> -> 會套用深色主題
  //   <div class="app-dark-mode"> -> 會套用深色主題
  //   <div class="header"> -> 不會套用深色主題
}
