module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "custom-extraligt": ["Custom-Extralight"],
        "custom-light": ["Custom-Light"],
        "custom-regular": ["Custom-Regular"],
        "custom-medium": ["Custom-Medium"],
        "custom-bold": ["Custom-Bold"],
        "custom-semibold": ["Custom-Semibold"],
        "custom-variable": ["Custom-Variable"],
        "custom-italic": ["Custom-Italic"],
        "custom-light-italic": ["Custom-Light-Italic"],
        "custom-bold-italic": ["Custom-Bold-Italic"],
        "custom-semibold-italic": ["Custom-Semibold-Italic"],
      },
      colors: {
        primary: {
          100: "#EDDAFD",
          200: "#D8B6FC",
          300: "#BE90F7",
          400: "#A673EF",
          500: "#8247E5",
          600: "#6433C4",
          700: "#4A23A4",
          800: "#331684",
          900: "#220D6D",
        },
        success: {
          100: "#EBFCD5",
          200: "#D4F9AC",
          300: "#B1EE80",
          400: "#8FDE5D",
          500: "#5FC92E",
          600: "#44AC21",
          700: "#2D9017",
          800: "#1A740E",
          900: "#0D6008",
        },
        information: {
          100: "#D3E5FE",
          200: "#A7C9FD",
          300: "#7BA8F9",
          400: "#598CF4",
          500: "#2561ED",
          600: "#1B4ACB",
          700: "#1236AA",
          800: "#0B2589",
          900: "#071971",
        },
        warning: {
          100: "#D3E5FE",
          200: "#A7C9FD",
          300: "#7BA8F9",
          400: "#598CF4",
          500: "#2561ED",
          600: "#1B4ACB",
          700: "#1236AA",
          800: "#0B2589",
          900: "#071971",
        },
        error: {
          100: "#FFE3D6",
          200: "#FFC0AD",
          300: "#FF9783",
          400: "#FF6F65",
          500: "#FF3236",
          600: "#DB2438",
          700: "#B71938",
          800: "#930F35",
          900: "#7A0933",
        },
        darkgrey: {
          100: "#747c90",
          200: "#656E85",
          300: "#5C657D",
          400: "#525C76",
          500: "#49536E",
          600: "#3A4662",
          700: "#2C3857",
          800: "#192648",
          900: "#0F1D40",
        },
        lightgrey: {
          100: "#FAFAFB",
          200: "#F5F6F7",
          300: "#EEEFF2",
          400: "#E2E4E8",
          500: "#CACDD5",
          600: "#B2B7C2",
          700: "#A4A9B6",
          800: "#959CAB",
          900: "#8C93A3",
        },
      },
    },
  },
  plugins: [],
};
