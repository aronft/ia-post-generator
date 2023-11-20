/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            colors: {
                brand: {
                    gray: '#939393',
                    green: {
                        400: '#40a14c',
                    },
                },
            },
        },
    },
    plugins: [],
}
