const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            animation: {
                'text': 'text 3s ease infinite',
            },
            keyframes: {
                'text': {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center'
                    }
                },
            },
            colors: {
                white: "#FFFFFF",
                black: "#000000",
                blue: {
                    50: "#e6f1fe",
                    100: "#cce3fd",
                    200: "#99c7fb",
                    300: "#66aaf9",
                    400: "#338ef7",
                    500: "#006FEE",
                    600: "#005bc4",
                    700: "#004493",
                    800: "#002e62",
                    900: "#001731",
                },
                secondary: "#004493",
                // .. rest of the colors
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require("daisyui"),
        nextui({
            addCommonColors: true,
        })
    ],
    darkMode: 'class',
}
