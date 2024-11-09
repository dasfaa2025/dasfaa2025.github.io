import TailwindcssTypography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "75ch",
          },
        },
      },
    },
  },
  plugins: [TailwindcssTypography],
};
