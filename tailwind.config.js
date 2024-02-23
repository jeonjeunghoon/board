/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: '#333D4B',
      primaryText: '#FFFFFF',
      primaryTextHover: '#FFFFFF',
      secondaryText: '#6B7684',
      secondaryTextHover: '#0056B3',
    },

    backgroundColor: {
      primaryTextBackground: '#307FFF',
      primaryTextBackgroundHover: '#1B64D9',
      secondaryTextBackground: '#FFFFFF',
      secondaryTextBackgroundHover: '#EAF3FF',
      secondaryTextBackgroundFocus: '#E5E8EA',
    },

    borderColor: {
      primary: '#E5E8EA',
    },
  },
  plugins: [],
};
