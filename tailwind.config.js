module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
			'transparent': 'transparent',
			'black': {
				100: '#16162A'
			},
			'white': {
				100: '#D4D4D4',
				200: '#EAEAFF',
        300: '#F9F9F9',
        400: '#FFFFFF'
			},
      'text-black': {
        100: '#000000',
        200: '#1A1F36',
        300: '#16162A',
				400: '#697386',
        500: '#8792A2'
      },
      'text-white': {
        100: '#EAEAFF',
        200: '#8E8EA3',
        300: '#FFFFFF',
        400: '#A2A2A5'
      },
			'blue': '#4277FF',
      'red': 'red'
    },
		fontFamily: {
			'inter': ['Inter', 'sans-serif'],
			'roboto': ['Roboto', 'sans-serif']
		},
    fontSize: {
      'label': ['13.6373px', '19px'],
      'input': ['18.8825px', '29px'],
      'policy': ['15px', '18px'],
      'checkbox': ['20.3471px', '25px'],
      'button': ['14px', '20px'],
      'back-link': ['18px', '40px'],
      'price': ['25px', '30px'],
      'model': ['20px', '35px'],
      'car-data': ['15px', '35px'],
      'price-lg': ['44.68px', '54.61px'],
      'powered': ['12px', '14px']
    },
    extend: {
      boxShadow: {
        'checkbox': '0px 1.24302px 1.24302px rgba(0, 0, 0, 0.1), 0px 0px 0px 1.24302px #5E5ADB, 0px 0px 0px 4.97206px rgba(94, 90, 219, 0.4);'
      }
    },
  },
  plugins: [],
}
