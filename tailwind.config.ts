import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'


const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '320px',
      ...defaultTheme.screens,
    },
    cursor:{
      default: "url('../public/eye.svg'), auto",
    },
    extend: {
      fontFamily:{
        basement: ["Basement Grotesque", "Helvetica"]
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        'spin-slow': 'spin 10s linear infinite',
        'spin-slow-alt': 'spin 8s linear infinite',
        wiggle: "wiggle 200ms ease-in-out"
       
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" }
        }
      },
    }
  },
  plugins: [],
}
export default config
