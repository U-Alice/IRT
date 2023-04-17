module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'regal-green': 'rgba(77, 189, 151, 0.53)',
        'green': 'rgba(77, 189, 151, 0.83)',
        'trans-blue': 'rgba(2, 86, 119, 0.78)',
        'blue-linear': 'rgba(2, 86, 119, 1)'
      },
      fontFamily: {
        'quicksand': 'Quicksand'
      },
      animation: {
        text: 'text 5s ease infinite',
        'fade-in-down': 'fade-in-down 1s ease-out',
        'fade-from-left': 'fade-from-left 1s ease-out',
        'fade-in-up': 'fade-in-up 1s ease-out',
        'fade-from-right': 'fade-from-right 1s ease-out'

      },

      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },

        'fade-from-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },

        'fade-from-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },

        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },

      },
    },
  },
  plugins: [],
}
