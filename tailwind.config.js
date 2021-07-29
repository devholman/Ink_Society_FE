module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    maxHeight: {
      0: '0',
      '1/4': '25rem',
      '1/2': '35rem',
      '3/4': '50rem',
      full: '100%',
    },
    extend: {
      colors: {
        gray: {
          lt: '#B8B7B7',
          md: '#666666',
          dk: '#333333',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        white: {
          100: '#ffffff',
        },
        green: {
          100: '004614',
        },
        cream: {
          100: 'eee1c8',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
