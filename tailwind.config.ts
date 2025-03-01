import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        positivusGreen: "#B9FF66",
        positivusDark: "#191A23",
        positivusGray: "#F3F3F3",
        positivusBlackLight: "#292A32",
      },
      fontFamily: {
        sans: "var(--font-space-grotesk)",
      },
      screens: {
        widescreen: { raw: "(min-aspect-ratio: 3/2)" },
        talescreen: { raw: "(max-aspect-ratio: 13/20)" },
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
