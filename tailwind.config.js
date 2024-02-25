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
      error: '#ED4337',
    },

    backgroundColor: {
      primaryBackground: '#307FFF',
      primaryBackgroundHover: '#1B64D9',
      secondaryBackground: '#FFFFFF',
      secondaryBackgroundHover: '#F3F4F5',
      secondaryBackgroundFocus: '#E5E8EA',
      thirdBackground: '#6B7684',
    },

    borderColor: {
      primary: '#E5E8EA',
      error: '#ED4337',
      focus: '#307FFF',
    },

    animation: {
      fade: 'fadeIn .5s ease-in-out',
    },

    keyframes: {
      fadeIn: {
        from: {
          opacity: 0,
          transform: 'translate3d(0, 20%, 0)',
        },
        to: {
          opacity: 1,
          transform: 'translateZ(0)',
        },
      },
    },
  },
  plugins: [],
};
