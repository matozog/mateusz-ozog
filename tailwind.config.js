/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            transitionProperty: {
                'height': 'height',
                'max-height': 'max-height'
            },
            colors: {
                'dark-color': '#1a1a1a',
                'main-green': '#185f28'
            }
        },
    },
    plugins: [],
};
