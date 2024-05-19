/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        abhi: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px",
        abhi2:
          "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.55) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
        abhi3: "rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset",
        abhi4: "rgb(38, 57, 77) 0px 20px 30px -10px",
      },
    },
  },
  plugins: [],
};
