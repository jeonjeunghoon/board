/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#307FFF',
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
      secondaryTextBackgroundHover: '#F3F4F5',
      secondaryTextBackgroundFocus: '#E5E8EA',
    },

    borderColor: {
      primary: '#E5E8EA',
    },
  },
  plugins: [],
};
