/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#33909C",
        secondary: "#4EC2D2",
        secondaryLight: "#E5F7F9",
        complementary: "#D95F49",
        contrast: "#F4D465",
        grayFooter: "#F3F3F3",
        popup: "rgba(0, 0, 0, 0.8)",
      },
      backgroundImage: {
        gradient: "linear-gradient(113.49deg, #33909C -30.3%, #fff 34.46%)",
      },
      boxShadow: {
        ct: "box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04)",
        form: "0px 4px 45px rgba(0, 0, 0, 0.08)",
      },
      borderRadius: {
        large: "10px",
      },
      fontSize: {
        h2: "40px",
        "3xl": "2.2rem",
      },
      lineHeight: {
        12: "3rem",
      },
      borderWidth: {
        1: "0.1px",
      },
      animation: {
        "pulse-slow":
          "animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  safelist: [
    "bg-primary",
    "bg-secondary",
    "bg-complementary",
    "bg-contrast",
    "border-primary",
    "border-secondary",
    "border-complementary",
    "border-contrast",
  ],

  plugins: [],
};
