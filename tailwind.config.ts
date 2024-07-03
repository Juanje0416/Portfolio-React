import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#FFD94D",
        darkBg: "#131424",
        whiteBg: "#e0a48d"
      },
      backgroundImage: {
        "gradient-cover": "linear-gradient(90.21deg, rgba(224, 164, 141, 1) -5.91%, rgba(225, 166, 142, 1) 151.58%)",
      },                  
    },
  },
  plugins: [],
};
export default config;
