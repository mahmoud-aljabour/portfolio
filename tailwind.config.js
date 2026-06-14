/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6c63ff',
        'primary-light': '#ede9ff',
        background: '#f8f8fc',
        dark: '#111827',
        muted: '#6b7280',
        border: '#e5e7eb',
        star: '#fbbf24',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '14px',
      },
      boxShadow: {
        card: '0 4px 20px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 12px 32px rgba(108, 99, 255, 0.15)',
        nav: '0 1px 8px rgba(0, 0, 0, 0.06)',
        'card-dark': '0 4px 20px rgba(0, 0, 0, 0.25)',
        'nav-dark': '0 1px 8px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
