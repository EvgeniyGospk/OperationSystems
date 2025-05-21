/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
  darkMode: "class", // Включаем поддержку темной темы через класс 'dark'
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Здесь можно будет добавлять кастомные расширения темы,
      // но в v4 многое конфигурируется через @theme в CSS.
      // Например, если захочешь добавить специфичные брейкпоинты не через @theme:
      // screens: {
      //   '3xl': '1920px',
      // },
    },
  },
  plugins: [typography],
};
