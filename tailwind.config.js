/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",               // Vite entry point
    "./src/**/*.{js,ts,jsx,tsx}", // All React files in src
  ],
  theme: {
    extend: {
        fontSize: {
        h1: "clamp(2rem, 5vw, 4rem)",   // 32px → 64px
        h2: "clamp(1.5rem, 3.5vw, 2.5rem)", // 24px → 40px
        h3: "clamp(1rem, 2.5vw, 2rem)", // 16px → 32px
        h4: "clamp(0.875rem, 2vw, 1.5rem)", // 14px → 24px
        p:  "clamp(0.75rem, 1.8vw, 1.125rem)", // 12px → 18px
      },
        boxShadow: {
        soft: "0 2px 8px rgba(0, 0, 0, 0.08)",   // light soft shadow
       card: "0 4px 12px rgba(0, 0, 0, 0.1)",
      },
    },
  },
    fontFamily: {
         inter: ['Inter', 'sans-serif'],
      },
  plugins: [],
};
