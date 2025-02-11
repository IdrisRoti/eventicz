import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        primary: "var(--primary)",
        textGray: "var(--textGray)",
        textDark: "var(--textDark)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
