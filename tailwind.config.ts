import type { Config } from 'tailwindcss'

const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Design system - Dark blues and creams
        'brand-bg': '#02040c',
        'brand-bg2': '#05091a',
        'brand-bg3': '#080f28',
        'brand-surface': 'rgba(8, 14, 36, 0.6)',
        'brand-amber': '#e8922a',
        'brand-amber-light': '#f5af4e',
        'brand-gold': '#eac96a',
        'brand-cream': '#f3eadc',
        'brand-cream-muted': 'rgba(243, 234, 220, 0.7)',
        'brand-muted': '#9490a6',
        'brand-glass': 'rgba(8, 14, 40, 0.55)',
      },
      fontFamily: {
        // Typography hierarchy
        'serif-display': ['Cormorant Garamond', 'serif'],
        'serif-label': ['Cinzel', 'serif'],
        'serif-body': ['Crimson Pro', 'serif'],
      },
      borderColor: {
        'brand-border': 'rgba(232, 146, 42, 0.15)',
        'brand-border-hover': 'rgba(232, 146, 42, 0.45)',
      },
      spacing: {
        'nav': '72px', // Navigation height
      },
      borderRadius: {
        'brand': '14px',
      },
      backdropBlur: {
        'brand': '20px',
      },
      transitionTimingFunction: {
        'ease-brand-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'ease-brand-in': 'cubic-bezier(0.4, 0, 1, 1)',
      },
      keyframes: {
        twinkle: {
          '0%': { opacity: '0.08' },
          '100%': { opacity: '0.9' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        twinkle: 'twinkle 3s ease-in-out infinite alternate',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
