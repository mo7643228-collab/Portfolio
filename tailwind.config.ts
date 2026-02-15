import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'pastel-pink': '#FFD1DC',
        'soft-pink': '#FF69B4',
        'soft-mint': '#E0F7FA',
        'soft-purple': '#F3E5F5'
      },
      borderRadius: {
        blob: '40% 60% 70% 30% / 40% 40% 60% 60%'
      }
    }
  },
  plugins: []
}

export default config
