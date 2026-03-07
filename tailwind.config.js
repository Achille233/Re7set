/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FCFBF8",
        secondary: "#F4F4F5",
        foreground: "#09090B",
        muted: "#71717A",
        primary: "#2563EB",
        darkAccent: "#09090B",
      },
      maxWidth: {
        container: "1280px",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Montserrat"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        floatDocument: {
          '0%, 100%': { transform: 'translateY(0) rotate(-2deg)' },
          '50%': { transform: 'translateY(-12px) rotate(-3deg)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' }
        }
      },
      animation: {
        'float-doc': 'floatDocument 4s ease-in-out infinite',
        marquee: 'marquee var(--duration) linear infinite',
      }
    },
  },
  plugins: [],
}
