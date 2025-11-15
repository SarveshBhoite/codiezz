/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        accent: {
          DEFAULT: '#3CC531',
          hover: '#34b029',
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#3CC531',
          600: '#34b029',
          700: '#2a9420',
          800: '#22741a',
          900: '#1a5e15',
          950: '#0f3a0c',
        },

        // Grayscale & Text Colors
        gray: {
          0: '#ffffff',
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#272727',
          900: '#111827',
          950: '#030712',
        },

        // Status Colors
        warning: {
          DEFAULT: '#F4A932',
          50: '#fefce8',
          500: '#F4A932',
          900: '#713f12',
        },

        success: {
          DEFAULT: '#3CC531',
          500: '#3CC531',
        },

        // Surface Colors
        surface: {
          base: '#ffffff',
          elevated: '#f8f8f8',
          overlay: '#f1f5f9',
        },

        // Custom Utility Colors from Port
        'dark-gray': '#272727',
        'dark-gray-50': '#8F8F8F',
        'stone-gray': '#6B7280',
        'dark-charcoal': '#272727',
        'light-gray': '#EBEBEB',
      },

      // Typography Configuration
      fontFamily: {
        sans: [
          'Suisse',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'system-ui',
          'sans-serif',
        ],
        suisse: [
          'Suisse',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'system-ui',
          'sans-serif',
        ],
        mono: [
          'Suisse Mono',
          '"Courier New"',
          'monospace',
        ],
        suisseMono: [
          'Suisse Mono',
          '"Courier New"',
          'monospace',
        ],
      },

      // Font Sizes with line heights
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '12': ['0.75rem', { lineHeight: '1rem' }],
        '14': ['0.875rem', { lineHeight: '1rem' }],
        '18': ['1.125rem', { lineHeight: '1.5rem' }],
        '20': ['1.25rem', { lineHeight: '1.5rem' }],
        '24': ['1.5rem', { lineHeight: '1.875rem' }],
        '26': ['1.625rem', { lineHeight: '2rem' }],
        '32': ['2rem', { lineHeight: '2.5rem' }],
        '60': ['3.75rem', { lineHeight: '4.25rem' }],
        '42': ['2.625rem', { lineHeight: '2.625rem' }],
      },

      // Border Radius
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '8': '8px',
        '14px': '14px',
        '20px': '20px',
        '24': '24px',
        '24px': '24px',
        '13px': '13px',
      },

      // Extended Spacing
      spacing: {
        '1px': '1px',
        '2px': '2px',
        '3px': '3px',
        '4px': '4px',
        '6px': '6px',
        '8px': '8px',
        '10px': '10px',
        '12px': '12px',
        '14px': '14px',
        '16px': '16px',
        '18': '4.5rem',
        '20px': '20px',
        '22px': '22px',
        '24': '6rem',
        '28': '7rem',
        '32px': '32px',
        '36px': '36px',
        '40px': '40px',
        '46px': '46px',
        '50': '12.5rem',
        '70px': '70px',
        '72': '18rem',
        '80px': '80px',
        '86px': '86px',
        '88': '22rem',
        '90px': '90px',
        '128': '32rem',
        '232px': '232px',
        '260px': '260px',
      },

      // Box Shadows
      boxShadow: {
        xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        sm: '0 0.7px 1.4px 0 rgba(0, 0, 0, 0.12), 0 1.4px 5.7px 0 rgba(0, 0, 0, 0.08)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.06)',
        'inset-light': 'inset 0 0 3px 2px rgba(255, 255, 255, 0.2), inset 0 0 12px 4px rgba(255, 255, 255, 0.13)',
        'glow': '0 0 20px rgb(60 197 49 / 0.3)',
        'glow-lg': '0 0 40px rgb(60 197 49 / 0.4)',
      },

      // Line Heights
      lineHeight: {
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        16: '16px',
        18: '18px',
        20: '20px',
        '20px': '20px',
        24: '24px',
        '24px': '24px',
        28: '28px',
        32: '32px',
        36: '36px',
        42: '42px',
        46: '46px',
        68: '68px',
      },

      // Letter Spacing
      letterSpacing: {
        '0.5': '0.5px',
        '0.14': '0.14px',
        '0.135': '0.135px',
        '0.9': '0.9px',
        '-0.5px': '-0.5px',
        '-1.2px': '-1.2px',
        '-1.6px': '-1.6px',
        '-2.4px': '-2.4px',
        '-1': '-0.025em',
        '-2': '-0.05em',
      },

      // Keyframes & Animations
      keyframes: {
        spinInfinity: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        slideDown: {
          from: { transform: 'translateY(0)', opacity: '1' },
          to: { transform: 'translateY(100%)', opacity: '0' },
        },
        slideUp: {
          from: { transform: 'translateY(100%)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        slideUpFade: {
          from: { opacity: '0', transform: 'translateY(100%)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        bounceDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },

      // Animations
      animation: {
        'spinInfinity': 'spinInfinity 8s linear infinite',
        'slideDown': 'slideDown 0.3s ease-in-out forwards',
        'slideUp': 'slideUp 0.3s ease-in-out forwards',
        'slide-up-fade': 'slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'bounce-down': 'bounceDown 3s ease-in-out infinite',
        'bounce-down-2': 'bounceDown 3s ease-in-out 0.5s infinite',
        'marquee': 'marquee 60s linear infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'shimmer': 'shimmer 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },

      // Z-Index Scale
      zIndex: {
        '-1': '-1',
        '0': '0',
        '1': '1',
        '10': '10',
        '20': '20',
        '50': '50',
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },

      // Grid Templates
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(280px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(280px, 1fr))',
      },

      // Aspect Ratios
      aspectRatio: {
        'portrait': '3 / 4',
        'landscape': '4 / 3',
        'ultrawide': '21 / 9',
        '16/9': '16 / 9',
      },

      // Container Configuration
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '3rem',
          '2xl': '4rem',
        },
      },
    },
  },

  plugins: [
    function({ addUtilities, addVariant }) {
      // Custom variants for better interactivity
      addVariant('hover-focus', ['&:hover', '&:focus-visible']);

      // Essential custom utilities for v3.4.18
      addUtilities({
        '.scrollbar-none': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.text-pretty': {
          'text-wrap': 'pretty',
        },
        '.shine-effect': {
          position: 'relative',
          overflow: 'hidden',
        },
        '.shine-effect::before': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '-100%',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
          animation: 'shine 3s infinite',
        },
        '.shadow-inset-light': {
          boxShadow: 'inset 0 0 3px 2px rgba(255, 255, 255, 0.2), inset 0 0 12px 4px rgba(255, 255, 255, 0.13)',
        },
      });
    },
  ],
};
