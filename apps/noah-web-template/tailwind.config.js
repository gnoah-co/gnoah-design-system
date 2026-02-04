export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F28928',
        secondary: '#1B2733',
        tertiary: '#A4A5A2',
        dark: '#171D23',
        light: '#C7DBE2',
      },
      borderRadius: { sm: '6px', md: '12px', lg: '20px' },
      boxShadow: { card: '0 8px 24px rgba(0,0,0,0.08)' },
    },
  },
  plugins: [],
}
