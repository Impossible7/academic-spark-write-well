import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#1e40af',
					foreground: '#ffffff'
				},
				secondary: {
					DEFAULT: '#64748b',
					foreground: '#ffffff'
				},
				accent: {
					DEFAULT: '#d97706',
					foreground: '#ffffff'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				"notebook": "#fefbf3",
				"ink-blue": "#1e40af",
				"ink-slate": "#334155",
				"ink-amber": "#d97706"
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				'serif': ['Playfair Display', 'serif'],
				'serif-bold': ['Source Serif Pro', 'serif'],
				'sans': ['Inter', 'sans-serif'],
				'academic': ['Crimson Text', 'serif'],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'handwriting': {
					'0%': { width: '0', opacity: '0' },
					'100%': { width: '100%', opacity: '1' }
				},
				'ink-splash': {
					'0%': { transform: 'scale(0) rotate(0deg)', opacity: '0' },
					'50%': { transform: 'scale(1.2) rotate(180deg)', opacity: '0.8' },
					'100%': { transform: 'scale(1) rotate(360deg)', opacity: '1' }
				},
				'colorful-bounce': {
					'0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
					'40%': { transform: 'translateY(-20px) rotate(5deg)' },
					'60%': { transform: 'translateY(-10px) rotate(-3deg)' }
				},
				'pen-draw': {
					'0%': { 'stroke-dasharray': '0 1000', opacity: '0' },
					'100%': { 'stroke-dasharray': '1000 0', opacity: '1' }
				},
				'page-flip': {
					'0%': { transform: 'rotateY(0deg)' },
					'50%': { transform: 'rotateY(-90deg)' },
					'100%': { transform: 'rotateY(0deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'handwriting': 'handwriting 3s ease-in-out forwards',
				'ink-splash': 'ink-splash 0.8s ease-out',
				'colorful-bounce': 'colorful-bounce 2s ease-in-out infinite',
				'pen-draw': 'pen-draw 2s ease-in-out infinite',
				'page-flip': 'page-flip 0.6s ease-in-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
