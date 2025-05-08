/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#334155',
            h1: {
              color: '#1e293b',
            },
            h2: {
              color: '#1e293b',
            },
            h3: {
              color: '#1e293b',
            },
            a: {
              color: '#0891b2',
              '&:hover': {
                color: '#0e7490',
              },
            },
            blockquote: {
              borderLeftColor: '#e2e8f0',
              color: '#64748b',
            },
            code: {
              color: '#334155',
              backgroundColor: '#f1f5f9',
              padding: '2px 4px',
              borderRadius: '4px',
            },
            pre: {
              backgroundColor: '#1e293b',
              color: '#f1f5f9',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};