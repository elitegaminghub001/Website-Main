import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00E5FF",
        secondary: "#8B5CF6",
        accent: "#FF2E63",
        background: "#050816",
        surface: "#111827",
        text: "#FFFFFF",
        muted: "#94A3B8"
      },
      fontFamily: {
        heading: ["Orbitron", "sans-serif"],
        body: ["Poppins", "sans-serif"]
      },
      boxShadow: {
        neon: "0 0 20px rgba(0,229,255,0.5)",
        pink: "0 0 20px rgba(255,46,99,0.4)"
      },
      backgroundImage: {
        hero: "linear-gradient(to right,#050816,#111827,#050816)"
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        fadeIn: "fadeIn 1s ease-in-out"
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        glow: {
          from: {
            textShadow: "0 0 10px #00E5FF"
          },
          to: {
            textShadow: "0 0 25px #8B5CF6"
          }
        },
        fadeIn: {
          from: {
            opacity: "0",
            transform: "translateY(20px)"
          },
          to: {
            opacity: "1",
            transform: "translateY(0)"
          }
        }
      }
    }
  },
  plugins: []
};

export default config;