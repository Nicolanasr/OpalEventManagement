/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                "dark-purple": "#14152c",
                "light-purple": "#161246",
                "primary-white": "#F2F2F2",
                "primary-pink": "#e91b77",
                "primary-blue": "#6abae0",
                "primary-black": "#313131",
            },
        },
        container: {
            center: true,
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
