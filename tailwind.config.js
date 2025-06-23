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
        'dark':'#111',
        'light': '#fffcfa',
        'grey-dark': '#333',
        'grey-medium': '#999',
        'grey-light': '#ccc',
        'grey-light-extra': '#eee',
        'hero-grey-1': '#232323',
        'hero-grey-2': '#434343' 
      }
    },
  },
  plugins: [],
}

