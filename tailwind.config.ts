import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		keyframes: {
  			'pulse-once': {
  				'0%': { transform: 'scale(1)', opacity: '1' },
  				'50%': { transform: 'scale(1.02)', opacity: '0.95' },
  				'100%': { transform: 'scale(1)', opacity: '1' }
  			},
  			'slide-in': {
  				'0%': { transform: 'translateY(8px)', opacity: '0' },
  				'100%': { transform: 'translateY(0)', opacity: '1' }
  			},
  			'fade-in': {
  				'0%': { opacity: '0' },
  				'100%': { opacity: '1' }
  			},
  			'shake': {
  				'0%, 100%': { transform: 'translateX(0)' },
  				'10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-1px)' },
  				'20%, 40%, 60%, 80%': { transform: 'translateX(1px)' }
  			},
  			'bounce-in': {
  				'0%': { transform: 'scale(0.95)', opacity: '0' },
  				'50%': { transform: 'scale(1.02)' },
  				'100%': { transform: 'scale(1)', opacity: '1' }
  			}, 
  		},
  		animation: {
  			'pulse-once': 'pulse-once 0.4s cubic-bezier(0.4, 0, 0.6, 1)',
  			'slide-in': 'slide-in 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
  			'fade-in': 'fade-in 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  			'shake': 'shake 0.3s cubic-bezier(.36,.07,.19,.97) both',
  			'bounce-in': 'bounce-in 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  		},
  		colors: {
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
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
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
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
