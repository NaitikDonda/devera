module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        devera: {
          DEFAULT: "#008081",
          teal: "#008081",
          dark: "#111313",
          cream: "#FFFCCF",
          offwhite: "#F8F7F2",
          graysoft: "#E8E8E3",
          deep: "#005F60",
        },
      },
      boxShadow: {
        glow: "0 24px 80px rgba(17, 19, 19, 0.08)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "1.25rem",
      },
      animation: {
        float: "float 10s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
