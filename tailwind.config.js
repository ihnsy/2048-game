/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'], // React와 TypeScript 파일을 포함
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      fontFamily: {
        custom: ['pretendard-light'],
      },
    },
  },
  plugins: [],
};
