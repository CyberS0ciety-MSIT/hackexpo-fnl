import type { Config } from 'tailwindcss'

export default {
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
                bengali: ['Hind Siliguri', 'sans-serif'],
            },
            colors: {
                // 60% - Obsidian Black
                nothing: {
                    black: '#0F172A',
                    dark: '#0A0A0A',
                    card: '#111111',
                    border: '#333333',
                },
                // 30% - Light Cyan Blue
                retro: {
                    cyan: '#A5F3FC', // The primary light cyan
                    dim: '#67E8F9',  // Slightly darker for gradients
                    text: '#CFFAFE', // Very light for text
                },
            },
            backgroundImage: {
                'dot-pattern': 'radial-gradient(#333333 1px, transparent 1px)',
                'dot-pattern-cyan': 'radial-gradient(#A5F3FC 1px, transparent 1px)',
                'scanlines': 'linear-gradient(to bottom, rgba(165, 243, 252, 0), rgba(165, 243, 252, 0) 50%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.2))',
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'ticker': 'ticker 60s linear infinite',
                'spin-slow': 'spin 8s linear infinite',
                'scan-fast': 'scan 3s linear infinite',
                'glitch': 'glitch 1s linear infinite',
                'glitch-intense': 'glitch-intense 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite',
                'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
            },
            keyframes: {
                ticker: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                scan: {
                    '0%': { backgroundPosition: '0% 0%' },
                    '100%': { backgroundPosition: '0% 100%' },
                },
                glitch: {
                    '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
                    '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
                    '62%': { transform: 'translate(0,0) skew(5deg)' },
                },
                'glitch-intense': {
                    '0%, 100%': { transform: 'translate(0)' },
                    '25%': { transform: 'translate(-5px, 5px) skewX(15deg)', filter: 'brightness(1.5)' },
                    '50%': { transform: 'translate(5px, -5px) skewX(-15deg)', filter: 'brightness(0.5)' },
                    '75%': { transform: 'translate(-5px, -5px) skewX(5deg)', filter: 'brightness(1.2)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px) scale(0.95)' },
                    '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
                }
            },
            transitionTimingFunction: {
                'fluid': 'cubic-bezier(0.23, 1, 0.32, 1)',
            }
        },
    },
    plugins: [],
} satisfies Config
