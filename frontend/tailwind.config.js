export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
        },

        background: {
          DEFAULT: "var(--color-background)",
          secondary: "var(--color-background-secondary)",
          light: "var(--color-background-light)",
          secondaryLight: "var(--color-background-secondary-light)",
        },
        border: {
          dark: "var(--color-border-dark)",
          light: "var(--color-border-light)",
        },
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          primaryLight: "var(--color-text-primary-light)",
          secondaryLight: "var(--color-text-secondary-light)",
        },
      },
    },
  },
};
