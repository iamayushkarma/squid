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
        secondary: "var(--secondary)",
        background: "var(--background)",
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          tertiary: "var(--text-tertiary)",
          disabled: "var(--text-disabled)",
          onPrimary: "var(--text-on-primary)",
        },
      },
    },
  },
};
