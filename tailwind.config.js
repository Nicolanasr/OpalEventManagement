/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'dark-purple': '#14152c',
                'light-purple': '#161246',
                'primary-white': '#fefefb',
                'primary-pink': '#e91b77',
                'primary-blue': '#6abae0',
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
