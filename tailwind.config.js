module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Orbitron",
      secondary: "Rajdhani",
      tertiary: "Aldrich",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#1F2937", // dark gray
        accent: "#3B82F6", // blue
        accent2: "#10B981", // green
      },
      backgroundImage: {
        // site: "url('./assets/site-bg.jpg')",
        about: "url('./assets/Ayushlogoabout.jpeg')",

        // services: "url('./assets/ayushservice2.png')",
      },
    },
  },
  plugins: [],
};
