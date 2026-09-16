import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Bright & Playful Theme (Inspired by brokerpartnerz.com)
        'brand-blue': '#155EEF',
        'brand-blue-hover': '#1048C6',
        'brand-blue-light': '#EFF4FF',
        'brand-purple': '#825CE5',
        'brand-purple-light': '#F4F0FF',
        'brand-orange': '#FF8000',
        'brand-orange-light': '#FFF6ED',
        'brand-emerald': '#10B981',
        'brand-emerald-light': '#ECFDF5',
        'brand-bg': '#F8FAFF',
        'brand-card': '#FFFFFF',
        'brand-dark': '#0F172A',
        'brand-slate': '#475569',
        'brand-muted': '#94A3B8',
        'brand-border': '#E2E8F0',

        // Compatibility palette
        'ink-navy': '#0F172A',
        'navy-light': '#1E293B',
        'navy-dark': '#0A0F1D',
        'brass': '#155EEF',
        'brass-dark': '#1048C6',
        'brass-light': '#EFF4FF',
        'paper': '#FFFFFF',
        'charcoal': '#0F172A',
        'slate': '#475569',
      },
      fontFamily: {
        fraunces: ['var(--font-fraunces)', 'Georgia', 'serif'],
        'public-sans': ['var(--font-public-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body-md': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'label': ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
      },
      borderWidth: {
        '1': '1px',
        '2': '2px',
      },
      borderRadius: {
        'sm': '2px',
        'DEFAULT': '4px',
        'md': '6px',
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
      maxWidth: {
        'content': '72ch',
        'reading': '65ch',
      },
      animation: {
        'pipeline-in': 'pipelineIn 0.4s ease-out forwards',
        'number-tick': 'numberTick 0.2s ease-out',
      },
      keyframes: {
        pipelineIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        numberTick: {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
