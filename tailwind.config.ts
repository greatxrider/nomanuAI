import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'class', // Enable class-based dark mode
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    orange: '#E56518', // Primary brand orange
                    black: '#000000',  // Primary brand black
                    'orange-light': '#F5A623', // Lighter orange for hover states
                    'orange-dark': '#C55A11',  // Darker orange for active states
                    'gray-light': '#F8F9FA',   // Light background
                    'gray-medium': '#6C757D',  // Medium gray text
                    'gray-dark': '#343A40',    // Dark gray text
                },
                primary: {
                    50: '#FFF4ED',
                    100: '#FFE8D1',
                    200: '#FFCFA3',
                    300: '#FFB074',
                    400: '#FF8F45',
                    500: '#E56518', // Main brand orange
                    600: '#C55A11',
                    700: '#A54F0E',
                    800: '#85420B',
                    900: '#653608',
                    950: '#452905',
                },
                gray: {
                    50: '#F8F9FA',
                    100: '#F1F3F4',
                    200: '#E8EAED',
                    300: '#DADCE0',
                    400: '#BDC1C6',
                    500: '#9AA0A6',
                    600: '#80868B',
                    700: '#5F6368',
                    800: '#3C4043',
                    900: '#202124',
                    950: '#000000', // Pure black for brand consistency
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-in-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'bounce-gentle': 'bounceGentle 3s infinite',
                'pulse-slow': 'pulse 3s infinite',
                'float': 'float 6s ease-in-out infinite',
                'marquee': 'marquee 30s linear infinite',
                'marquee-reverse': 'marquee-reverse 30s linear infinite',
                'gradient-x': 'gradient-x 15s ease infinite',
                'slideUp': 'slideUp 0.5s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                bounceGentle: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-15px)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                'marquee-reverse': {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
                'gradient-x': {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center'
                    },
                },
            },
        },
    },
    plugins: [],
}

export default config 