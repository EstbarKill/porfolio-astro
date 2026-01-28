module.exports = {
  theme: {
    extend: {
      animation: {
        shake: 'shake 0.5s infinite',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-2px) translateY(-2px)' },
          '50%': { transform: 'translateX(2px) translateY(2px)' },
          '75%': { transform: 'translateX(-2px) translateY(2px)' },
        },
      },
    },
  },
}