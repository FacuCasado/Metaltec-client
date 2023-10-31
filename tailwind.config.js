/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		},
		fontFamily: {
			sans: ['Montserrat', 'sans-serif'],
		},
		extend: {
			fontFamily: {
				courier: ['Courier Prime', 'monospace'],
			},
			colors: {
				// Dark:
				text: '#44403c',
				primary: '#fde68a',
				secondary: '#fef3c7',
				secondaryBorder: '#FFFFFF',
				errorText: '#f87171',
				// Light:
				textLight: '#0a0a0a',
				primaryLight: '#FAFAFA',
				secondaryLight: '#FFFFFF',
				secondaryBorderLight: '#cbd5e1',
				errorTextLight: '#dc2626',
			},
		},
	},
	plugins: [],
};
