/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-linear': 'linear-gradient(103.24deg, rgba(0, 8, 29, 0.9) 23.83%, rgba(0, 8, 29, 0.3) 96.1%)',
        'gradient-netflix': 'radial-gradient(99.93% 134.44% at 17.93% 0%, #09143C 0%, #101338 57.21%, #400E20 99.57%)',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "linear-gradient(103.24deg, rgba(0, 8, 29, 0.9) 23.83%, rgba(0, 8, 29, 0.3) 96.1%), url('/images/hero.jpg')",
      }, 
    },
  },
  plugins: [],
}
