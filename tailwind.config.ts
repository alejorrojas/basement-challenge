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
      default: "url('../public/ojo.png'), auto",
      pointer: "url('../public/ojo.png'), auto",
    },
    extend: {
      animation: {
        marquee: 'marquee 5s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    }
  },
  plugins: [],
}
export default config
