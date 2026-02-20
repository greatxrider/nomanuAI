import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
    	extend: {
    		colors: {
    			ink: {
    				DEFAULT: '#1d1d1f',
    				secondary: '#424245',
    				tertiary: '#6e6e73',
    				quaternary: '#86868b'
    			},
    			paper: {
    				DEFAULT: '#fbfbfd',
    				elevated: '#ffffff',
    				secondary: '#f5f5f7'
    			},
    			brand: {
    				DEFAULT: '#e56518',
    				orange: '#e56518',
    				black: '#1d1d1f',
    				'orange-light': '#f5a623',
    				'orange-dark': '#c55a11',
    				honey: '#f5a623',
    				'honey-light': '#ffd966',
    				'honey-dark': '#c88a14',
    				amber: '#ffbf00'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				hover: '#0077ed',
    				light: '#0a84ff',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			success: '#30d158',
    			warning: '#ff9f0a',
    			error: '#ff453a',
    			gray: {
    				'50': '#fbfbfd',
    				'100': '#f5f5f7',
    				'200': '#e8e8ed',
    				'300': '#d2d2d7',
    				'400': '#aeaeb2',
    				'500': '#8e8e93',
    				'600': '#636366',
    				'700': '#48484a',
    				'800': '#3a3a3c',
    				'900': '#1c1c1e',
    				'950': '#000000'
    			},
    			primary: {
    				'50': '#fff7ed',
    				'100': '#ffedd5',
    				'200': '#fed7aa',
    				'300': '#fdba74',
    				'400': '#fb923c',
    				'500': '#e56518',
    				'600': '#c55a11',
    				'700': '#9a3412',
    				'800': '#7c2d12',
    				'900': '#431407',
    				'950': '#27140a',
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		fontFamily: {
			sans: [
				'var(--font-plus-jakarta)',
				'Plus Jakarta Sans',
				'-apple-system',
				'BlinkMacSystemFont',
				'Segoe UI',
				'Roboto',
				'sans-serif'
			],
			display: [
				'var(--font-exo2)',
				'Exo 2',
				'-apple-system',
				'BlinkMacSystemFont',
				'Segoe UI',
				'sans-serif'
			]
    		},
    		fontSize: {
    			'display-2xl': [
    				'4.5rem',
    				{
    					lineHeight: '1.05',
    					letterSpacing: '-0.035em',
    					fontWeight: '700'
    				}
    			],
    			'display-xl': [
    				'3.75rem',
    				{
    					lineHeight: '1.08',
    					letterSpacing: '-0.03em',
    					fontWeight: '700'
    				}
    			],
    			'display-lg': [
    				'3rem',
    				{
    					lineHeight: '1.1',
    					letterSpacing: '-0.025em',
    					fontWeight: '600'
    				}
    			],
    			'display-md': [
    				'2.25rem',
    				{
    					lineHeight: '1.15',
    					letterSpacing: '-0.025em',
    					fontWeight: '600'
    				}
    			],
    			'display-sm': [
    				'1.875rem',
    				{
    					lineHeight: '1.2',
    					letterSpacing: '-0.02em',
    					fontWeight: '600'
    				}
    			],
    			'body-xl': [
    				'1.375rem',
    				{
    					lineHeight: '1.6',
    					letterSpacing: '-0.01em'
    				}
    			],
    			'body-lg': [
    				'1.125rem',
    				{
    					lineHeight: '1.65',
    					letterSpacing: '-0.01em'
    				}
    			],
    			'body-md': [
    				'1rem',
    				{
    					lineHeight: '1.65',
    					letterSpacing: '-0.01em'
    				}
    			],
    			'body-sm': [
    				'0.875rem',
    				{
    					lineHeight: '1.5',
    					letterSpacing: '-0.005em'
    				}
    			],
    			caption: [
    				'0.75rem',
    				{
    					lineHeight: '1.4',
    					letterSpacing: '0'
    				}
    			]
    		},
    		spacing: {
    			'18': '4.5rem',
    			'22': '5.5rem',
    			'26': '6.5rem',
    			'30': '7.5rem',
    			'34': '8.5rem',
    			'38': '9.5rem',
    			'42': '10.5rem'
    		},
    		borderRadius: {
    			sm: 'calc(var(--radius) - 4px)',
    			DEFAULT: '12px',
    			md: 'calc(var(--radius) - 2px)',
    			lg: 'var(--radius)',
    			xl: '20px',
    			'2xl': '24px',
    			'3xl': '28px',
    			'4xl': '32px'
    		},
    		boxShadow: {
    			xs: '0 1px 2px rgba(0, 0, 0, 0.04)',
    			sm: '0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)',
    			DEFAULT: '0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)',
    			md: '0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)',
    			lg: '0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06)',
    			xl: '0 16px 48px rgba(0, 0, 0, 0.16), 0 8px 16px rgba(0, 0, 0, 0.08)',
    			'2xl': '0 24px 64px rgba(0, 0, 0, 0.20), 0 12px 24px rgba(0, 0, 0, 0.10)',
    			brand: '0 4px 24px rgba(229, 101, 24, 0.25)',
    			'brand-lg': '0 8px 40px rgba(229, 101, 24, 0.35)',
    			'brand-xl': '0 12px 56px rgba(229, 101, 24, 0.45)',
    			'inner-brand': 'inset 0 1px 0 rgba(255, 255, 255, 0.15)',
    			glass: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
    			'hex-glow': '0 0 20px rgba(229, 101, 24, 0.3), 0 0 40px rgba(245, 166, 35, 0.15)',
    			'hex-glow-lg': '0 0 30px rgba(229, 101, 24, 0.4), 0 0 60px rgba(245, 166, 35, 0.2)',
    			honey: '0 4px 24px rgba(245, 166, 35, 0.2), 0 2px 8px rgba(229, 101, 24, 0.15)'
    		},
    		backdropBlur: {
    			xs: '4px',
    			sm: '8px',
    			DEFAULT: '16px',
    			md: '16px',
    			lg: '24px',
    			xl: '40px',
    			'2xl': '64px'
    		},
    		animation: {
    			'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
    			'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
    			'fade-in-down': 'fadeInDown 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
    			'fade-in-left': 'fadeInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
    			'fade-in-right': 'fadeInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
    			'scale-in': 'scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
    			'slide-up': 'slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    			'slide-down': 'slideDown 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    			'bounce-gentle': 'bounceGentle 3s infinite',
    			'pulse-subtle': 'pulseSubtle 3s infinite',
    			float: 'float 6s ease-in-out infinite',
    			glow: 'glow 2s ease-in-out infinite',
    			shimmer: 'shimmer 2s linear infinite',
    			marquee: 'marquee 30s linear infinite',
    			'marquee-reverse': 'marquee-reverse 30s linear infinite',
    			'gradient-shift': 'gradient-shift 4s ease infinite',
    			'hex-pulse': 'hexPulse 3s ease-in-out infinite',
    			'honey-drip': 'honeyDrip 4s ease-in-out infinite',
    			'hex-rotate': 'hexRotate 20s linear infinite',
    			'honeycomb-reveal': 'honeycombReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
    			'honey-shimmer': 'honeyShimmer 4s ease-in-out infinite',
    			'hex-float': 'hexFloat 8s ease-in-out infinite'
    		},
    		keyframes: {
    			fadeIn: {
    				'0%': {
    					opacity: '0'
    				},
    				'100%': {
    					opacity: '1'
    				}
    			},
    			fadeInUp: {
    				'0%': {
    					opacity: '0',
    					transform: 'translateY(2.5rem)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateY(0)'
    				}
    			},
    			fadeInDown: {
    				'0%': {
    					opacity: '0',
    					transform: 'translateY(-2.5rem)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateY(0)'
    				}
    			},
    			fadeInLeft: {
    				'0%': {
    					opacity: '0',
    					transform: 'translateX(-4rem)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateX(0)'
    				}
    			},
    			fadeInRight: {
    				'0%': {
    					opacity: '0',
    					transform: 'translateX(4rem)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateX(0)'
    				}
    			},
    			scaleIn: {
    				'0%': {
    					opacity: '0',
    					transform: 'scale(0.92)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'scale(1)'
    				}
    			},
    			slideUp: {
    				'0%': {
    					opacity: '0',
    					transform: 'translateY(100%)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateY(0)'
    				}
    			},
    			slideDown: {
    				'0%': {
    					opacity: '0',
    					transform: 'translateY(-100%)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateY(0)'
    				}
    			},
    			bounceGentle: {
    				'0%, 100%': {
    					transform: 'translateY(0)'
    				},
    				'50%': {
    					transform: 'translateY(-12px)'
    				}
    			},
    			pulseSubtle: {
    				'0%, 100%': {
    					opacity: '1'
    				},
    				'50%': {
    					opacity: '0.7'
    				}
    			},
    			float: {
    				'0%, 100%': {
    					transform: 'translateY(0px)'
    				},
    				'50%': {
    					transform: 'translateY(-12px)'
    				}
    			},
    			glow: {
    				'0%, 100%': {
    					boxShadow: '0 0 20px rgba(229, 101, 24, 0.2)'
    				},
    				'50%': {
    					boxShadow: '0 0 40px rgba(229, 101, 24, 0.4)'
    				}
    			},
    			shimmer: {
    				'0%': {
    					backgroundPosition: '-200% 0'
    				},
    				'100%': {
    					backgroundPosition: '200% 0'
    				}
    			},
    			marquee: {
    				'0%': {
    					transform: 'translateX(0%)'
    				},
    				'100%': {
    					transform: 'translateX(-100%)'
    				}
    			},
    			'marquee-reverse': {
    				'0%': {
    					transform: 'translateX(-100%)'
    				},
    				'100%': {
    					transform: 'translateX(0%)'
    				}
    			},
    			'gradient-shift': {
    				'0%, 100%': {
    					'background-size': '200% 200%',
    					'background-position': '0% 50%'
    				},
    				'50%': {
    					'background-size': '200% 200%',
    					'background-position': '100% 50%'
    				}
    			},
    			hexPulse: {
    				'0%, 100%': {
    					opacity: '0.6',
    					transform: 'scale(1)'
    				},
    				'50%': {
    					opacity: '1',
    					transform: 'scale(1.05)'
    				}
    			},
    			honeyDrip: {
    				'0%, 100%': {
    					transform: 'translateY(0) scaleY(1)',
    					opacity: '0.8'
    				},
    				'50%': {
    					transform: 'translateY(8px) scaleY(1.1)',
    					opacity: '1'
    				}
    			},
    			hexRotate: {
    				'0%': {
    					transform: 'rotate(0deg)'
    				},
    				'100%': {
    					transform: 'rotate(360deg)'
    				}
    			},
    			honeycombReveal: {
    				'0%': {
    					opacity: '0',
    					transform: 'scale(0.8) rotate(-5deg)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'scale(1) rotate(0deg)'
    				}
    			},
    			honeyShimmer: {
    				'0%': {
    					'background-position': '0% 50%'
    				},
    				'50%': {
    					'background-position': '100% 50%'
    				},
    				'100%': {
    					'background-position': '0% 50%'
    				}
    			},
    			hexFloat: {
    				'0%, 100%': {
    					transform: 'translateY(0) rotate(0deg)'
    				},
    				'33%': {
    					transform: 'translateY(-15px) rotate(60deg)'
    				},
    				'66%': {
    					transform: 'translateY(8px) rotate(120deg)'
    				}
    			}
    		},
    		transitionTimingFunction: {
    			'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
    			'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
    			'in-out-quart': 'cubic-bezier(0.76, 0, 0.24, 1)',
    			spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
    		},
    		transitionDuration: {
    			'250': '250ms',
    			'350': '350ms',
    			'400': '400ms',
    			'600': '600ms',
    			'800': '800ms'
    		}
    	}
    },
    plugins: [require("tailwindcss-animate")],
}

export default config
