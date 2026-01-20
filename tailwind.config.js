/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'prime': '#ff4500',
        'prime-dark': '#de3b00',
        'prime-light': '#ff5f34',
        'support': '#008080',
        'support-dark': '#012222',
        'dark':'#111',
        'light': '#fffcfa',
        'grey-1': '#333',
        'grey-2': '#999',
        'grey-3': '#ccc',
        'grey-4': '#eee',
        'hero-grey-1': '#232323',
        'hero-grey-2': '#434343' 
      }
    },
  },
  plugins: [],
}

