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
        navy: {
          DEFAULT: "#002B5B",
          50: "#E6EEF8",
          100: "#CCDDF1",
          200: "#99BBE3",
          300: "#6699D5",
          400: "#3377C7",
          500: "#0055B9",
          600: "#004494",
          700: "#003370",
          800: "#00224B",
          900: "#001127",
          950: "#000813",
        },
        teal: {
          DEFAULT: "#00A6A6",
          50: "#E0F7F7",
          100: "#C0EFEF",
          200: "#80DFDF",
          300: "#40CFCF",
          400: "#00BFBF",
          500: "#00A6A6",
          600: "#008585",
          700: "#006464",
          800: "#004242",
          900: "#002121",
        },
        gold: {
          DEFAULT: "#D4AF37",
          50: "#FCF7E6",
          100: "#F8EFCD",
          200: "#F1DF9B",
          300: "#EACF69",
          400: "#E3BF37",
          500: "#D4AF37",
          600: "#AA8C2C",
          700: "#7F6921",
          800: "#554616",
          900: "#2A230B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        float: "float 3s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #FFF1C2 0%, #D4AF37 50%, #A07A07 100%)",
        "navy-gradient":
          "linear-gradient(135deg, #002B5B 0%, #001229 100%)",
        "teal-gradient":
          "linear-gradient(135deg, #3FEBEB 0%, #00A6A6 100%)",
        "hero-gradient":
          "linear-gradient(to right, rgba(0,43,91,0.92) 0%, rgba(0,43,91,0.7) 60%, rgba(0,43,91,0.3) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
