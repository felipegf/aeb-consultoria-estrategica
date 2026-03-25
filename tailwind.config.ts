import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0D2B5C",
        blue: "#1A5FA8",
        sky: "#2E86AB",
        teal: "#1B998B",
        offwhite: "#F8FAFB",
        mist: "#F0F7FF",
        text: "#2C3E50",
        sub: "#5D7290",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
