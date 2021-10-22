module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
        spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    },
		margin: {
			sm: '8px',
			md: '16px',
			lg: '24px',
			xl: '32px',
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
