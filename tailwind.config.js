/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,vue,js}"],
    theme: {
        screens: {
            'sm': '480px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1440px',
        },
        extend: {
            colors: {
                brightRed: 'hsl(12, 88%, 59%)',
                brightRedlight: 'hsl(12, 88%, 69%)',
                brightRedSupLight: 'hsl(12, 88%, 95%)',
                darkBlue: 'hsl(228, 39%, 23%)',
                darkGrayishBlue: 'hsl(227, 12%, 61%)',
                veryDarkBlue: 'hsl(233, 12%, 13%)',
                veryPaleRed: 'hsl(13, 100%, 96%)',
                veryLightGray: 'hsl(0, 0%, 98%)',
            },
            fontFamily: {
                'roboto': ['Roboto', 'sans-serif'],
            },
            fontSize: {
                'tinyTitle': '10px',
            }
        },
        container: {
            center: true,
            padding: '2rem',
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}

