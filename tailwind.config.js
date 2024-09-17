// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust based on where your files are located
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      white: "#ffff",
      primary: "#3498db",
      secondary: "#f1c40f",
      fontSecondary: "#939393",
      fontBg: "#f5f5f5f5",
      transparent: "transparent",
      current: "currentColor",
      blue: {
        light: "#85d7ff",
        DEFAULT: "#1fb6ff",
        dark: "#009eeb",
      },
      pink: {
        light: "#ff7ce5",
        DEFAULT: "#ff49db",
        dark: "#ff16d1",
      },
      gray: {
        darkest: "#1f2d3d",
        dark: "#3c4858",
        DEFAULT: "#c0ccda",
        light: "#e0e6ed",
        lightest: "#f9fafc",
      },
      green: {
        light:'#6fe7dd',
      },
      yellow: {
        light:'#ffc93c',
      },
      red :{
        light:'#f73859'
      },
      blue:{
        light:'#407BFF'
      }
    },
    font:{
      eighteen:'18px'
    }
  },
  plugins: [],
};
