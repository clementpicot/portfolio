/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
      fontFamily: {
        funnel: "var(--font-funnel)",
      },
      fontSize: {
        clamp: "clamp(2rem, 10vw, 8.5rem)",
      },
    },
  },
  plugins: [],
  darkMode: ["selector", "[data-mode='dark']"],
};
