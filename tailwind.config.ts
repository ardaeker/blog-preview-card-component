import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      gray: "var(--color-gray)",
      white: "var(--color-white)",
      black: "var(--color-black)",
      yellow: "var(--color-yellow)",
    },
    extend: {
      maxWidth: {
        card: "var(--max-width-card)",
      },
      borderRadius: {
        card: "var(--border-radius-card)",
        thumbnail: "var(--border-radius-thumbnail)",
      },
      boxShadow: {
        card: "var(--box-shadow-card)",
        "card-active": "var(--active-box-shadow-card)",
      },
      height: {
        thumbnail: "var(--height-thumbnail)",
      },
    },
  },
  plugins: [],
};
export default config;
