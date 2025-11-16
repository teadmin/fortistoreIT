import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        fortinet: {
          red: '#EE3124',
          dark: '#1A1A1A',
          gray: '#F5F5F5',
        },
      },
    },
  },
  plugins: [],
}
export default config
