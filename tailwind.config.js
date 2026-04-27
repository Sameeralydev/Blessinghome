/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        berlin: ["Berlin", "sans-serif"], // Regular Berlin font
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      colors: {
        main: "#c33e3f",
        mainD: "#a92f30",
        sec: "#232d6a",
        secD: "#6f79a8",
        light: "#fff",
        dark: "#111",
        gray: "#797979",
        grayL: "#e4e4e4",
        grayD: "#555",
      },
    },
  },
  plugins: [],
};
