export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    fontFamily: { sans: ['Poppins', 'system-ui', 'sans-serif'], title: ['Quicksand', 'Poppins', 'sans-serif'] },
    colors: { brand: { orange: '#FFA64D', purple: '#9747FF', teal: '#0090A8', blue: '#2F6BFF', deep: '#00545F', grey: '#F5F5F5' } }
  } },
  plugins: [],
}
