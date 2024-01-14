/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        tan: {
          50: "#FBF5EF",
          100: "#F6EADF",
          200: "#EFD8C3",
          300: "#E6C3A3",
          400: "#DDAE83",
          500: "#D59C65",
          600: "#C47B36",
          700: "#945D28",
          800: "#643F1B",
          900: "#301E0D",
          950: "#180F07",
        },
        alabaster: {
          50: "#FBFAF8",
          100: "#F8F5F2",
          200: "#EFE9E1",
          300: "#E7DFD4",
          400: "#DED3C4",
          500: "#D6C8B5",
          600: "#BAA382",
          700: "#9A7E55",
          800: "#665338",
          900: "#352B1D",
          950: "#1A150F",
        },
        blackolive: {
          50: "#ECE9EA",
          100: "#DCD5D7",
          200: "#B7A9AC",
          300: "#948084",
          400: "#69595C",
          500: "#3F3537",
          600: "#322A2C",
          700: "#272122",
          800: "#191516",
          900: "#0E0C0C",
          950: "#060505",
        },
        darksilver: {
          50: "#F1EFEF",
          100: "#E5E2E1",
          200: "#C9C3C0",
          300: "#AFA6A2",
          400: "#938681",
          500: "#766A65",
          600: "#5D5450",
          700: "#47403D",
          800: "#2F2A28",
          900: "#191615",
          950: "#0B0A09",
        },
      },
      typography: ({ theme }) => ({
        blackolive: {
          css: {
            '--tw-prose-body': theme('colors.alabaster[800]'),
            '--tw-prose-headings': theme('colors.blackolive[800]'),
            '--tw-prose-lead': theme('colors.alabaster[800]'),
            '--tw-prose-links': theme('colors.alabaster[700]'),
            '--tw-prose-bold': theme('colors.tan[600]'),
            '--tw-prose-counters': theme('colors.blackolive[600]'),
            '--tw-prose-bullets': theme('colors.blackolive[400]'),
            '--tw-prose-hr': theme('colors.blackolive[300]'),
            '--tw-prose-quotes': theme('colors.tan[600]'),
            '--tw-prose-quote-borders': theme('colors.alabaster[600]'),
            '--tw-prose-captions': theme('colors.blackolive[700]'),
            '--tw-prose-code': theme('colors.blackolive[900]'),
            '--tw-prose-pre-code': theme('colors.darksilver[100]'),
            '--tw-prose-pre-bg': theme('colors.darksilver[800]'),
            '--tw-prose-th-borders': theme('colors.blackolive[300]'),
            '--tw-prose-td-borders': theme('colors.blackolive[200]'),
            '--tw-prose-invert-body': theme('colors.blackolive[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.blackolive[300]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.blackolive[400]'),
            '--tw-prose-invert-bullets': theme('colors.blackolive[600]'),
            '--tw-prose-invert-hr': theme('colors.blackolive[700]'),
            '--tw-prose-invert-quotes': theme('colors.blackolive[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.blackolive[700]'),
            '--tw-prose-invert-captions': theme('colors.blackolive[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.blackolive[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.blackolive[600]'),
            '--tw-prose-invert-td-borders': theme('colors.blackolive[700]'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography'),
],
};
