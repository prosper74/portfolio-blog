/** @type {import('tailwindcss').Config} */
module.exports = {
  enabled: process.env.NODE_ENV === 'production',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  options: {
    safelist: [],
  },
  theme: {
    screens: {
      xs: '340px',
      // => @media (min-width: 640px) { ... }
      xss: '430px',
      xsss: '560px',
      // => @media (min-width: 430px) { ... }
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      'max-md': { max: '768px' },
      // => @media (max-width: 1535px) { ... }
    },
    extend: {
      fontSize: {
        md: '1.1rem',
      },
      colors: {
        primary: '#9932cc',
        primaryLight: '#c042ff',
        secondary: '#311042',
        secondaryDark: '#2B0E3A',
        body: 'rgb(253, 245, 255)',
        overlay: 'rgba(0, 0, 0, 0.5)',
        bgHeader: 'rgb(253, 245, 255, 0.5)',
      },
      width: {
        130: '62rem',
        128: '47rem',
        30: '30rem',
        19: '19rem',
      },
      height: {
        127: '20rem',
        128: '30rem',
      },
      boxShadow: {
        top: '0 -1px 4px rgba(0, 0, 0, 0.15)',
        button: '0 4px 4px rgba(0, 0, 0, 0.15)',
        customBox: '0 2px 4px rgba(0, 0, 0, 0.2)',
      },

      gridTemplateColumns: {
        101: '0.5fr 3fr',
        105: '0.7fr',
        107: '0.8fr',
        111: '1fr max-content 1fr',
      },
      gridColumn: {
        101: '1 / 3',
        initial: 'initial',
      },
    },
  },

  darkMode: `class`,
};
