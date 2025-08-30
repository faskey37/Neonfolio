import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
        headline: ['"Cinzel Decorative"', 'serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
       boxShadow: {
        fiery: '0 0 60px 15px hsla(var(--primary), 0.7), 0 0 20px 5px hsla(var(--accent), 0.9)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        movePattern: {
          from: { transform: 'translate(0, 0)' },
          to: { transform: 'translate(30px, 30px)' },
        },
        float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-20px)' },
        },
        'float-alt': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(20px)' },
        },
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px 10px hsla(var(--primary), 0.3)',
          },
          '50%': {
            boxShadow: '0 0 30px 15px hsla(var(--primary), 0.5)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'movePattern': 'movePattern 60s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-alt': 'float-alt 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
