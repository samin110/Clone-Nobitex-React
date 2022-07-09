module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      fontFamily: {
        vazirLight: ["vazir-light"],
        vazirBold: ["vazir-bold"],
      },

      backgroundImage: {
        "header-image": "url('/public/assets/images/jumbotron.3ceb851.svg')",
      },
      gridTemplateRows: {
        // Simple 8 row grid
        8: "repeat(8, minmax(0, 1fr))",
        // // Complex site-specific row configuration
        // layout: "200px minmax(900px, 1fr) 100px",
      },
      // colors:{
      //   btn
      // }
    },
  },
  plugins: [],
};
