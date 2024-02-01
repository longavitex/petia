import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      transparent: 'transparent',
      'white': '#ffffff',
      'green': '#76AB40',
      'orange': '#EF6D44',
      'brown': '#99412B',
      'black': '#1D1D1D',
      'star': '#FDA72F',
      'grey': '#9FA09C',
      'secondary': '#676767',
      'surface': '#F7F7F7',
      'line': 'rgba(0,0,0,0.1)',
    },
  },
  plugins: [],
}
export default config

