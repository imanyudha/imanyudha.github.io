/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode : "class",
  theme: {
    screens: {
      sm: "480px", // Small screens
      md: "768px", // Medium screens
      lg: "976px", // Large screens
      xl: "1400px", // Extra-large screens
    },
    extend: {
      colors: {
        sectionColor: "hsl(209, 100%, 97%)",
        darkBodyColor: "hsl(216, 100%, 4%)",
        darkSectionColor: "hsl(211, 100%, 12%)",
        primaryColor: "hsl(209, 87%, 21%)",
        primaryColorLight: "hsl(209, 74%, 45%)",
        whiteColor: "#fff",
        textColor: "#DDD",
        secondaryColor: "red",
      },
      keyframes: {
        move: {
          "50%": { transform: "scale(1.1)"}
        }
      },
      animation: {
        scaleAnimation: "move 3s linear infinite"
      }
    },
    container: {
      center: true, // Ensures the container is centered
      padding: {
        DEFAULT: "10px", // Default padding for all screens
        md: "30px",      // Increased padding for medium and larger screens
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"], // Define the "Poppins" font family
      londrina: ["Londrina Outline", "sans-serif"], // Define the "Londrina Outline" font family
    },
    
  },
  plugins: [],
}