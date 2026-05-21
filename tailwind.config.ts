import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        border: "var(--border)",
        "dark-section": "var(--dark-section)",
        "hero-start": "var(--hero-bg-start)",
        "hero-end": "var(--hero-bg-end)",
        "card-bg": "var(--card-bg)",
        "brand-text": "var(--text)",
      },
      fontFamily: {
        sans: [
          "var(--font-body)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        heading: [
          "var(--font-heading)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "scroll-up": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        "scroll-down": {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 80s linear infinite",
        "scroll-up": "scroll-up 22s linear infinite",
        "scroll-down": "scroll-down 22s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
