/** @type {import('tailwindcss').Config} */
module.exports = {
  enabled: process.env.NODE_ENV === 'production',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  options: {
    safelist: [],
  },
  theme: {
    screens: {
      xs: '340px',
      // => @media (min-width: 640px) { ... }
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

      'max-md': {'max': '768px'},
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
        body: 'rgb(253, 245, 255)',
        // 'gray-700': '#273444',
        // gray: '#8492a6',
        // 'gray-50': '#f8fafc',
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
        'top': '0 -1px 4px rgba(0, 0, 0, 0.15)',
        // 'bt': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',  
      },
    },
  },

  darkMode: `class`,
}
