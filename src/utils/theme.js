import { extendTheme, theme } from "@chakra-ui/react";

const colors = Object.freeze({
  bg: {
    main: "#3326AE",
    light: "#ffffff",
    secondary: "#FF392B",
  },
  brand: {
    main: "#195464",
    secondary: "#FF392B",
    tertiary: "#45A2E5",
  },
  typography: {
    white: "#FFFFFF",
    dark: "#000000",
    orange: "#735A5A",
  },
  shadow: {
    main: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
  },
});

const breakpoints = Object.freeze({
  ...theme.breakpoints,
  xs: "320px",
  sm: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1200px",
  "2xl": "1440px",
});

const styles = Object.freeze({
  global: {
    html: {
      scrollBehavior: "smooth",
    },
    body: {
      color: colors.typography.dark,
      backgroundColor: "#FAF9FC",
      width: "100%",
      height: "100%",
    },
    "*, *::before, *::after": {
      margin: "0",
      padding: "0",
      boxSizing: "border-box",
    },
  },
});

const customTheme = extendTheme({
  colors,
  breakpoints,
  styles,
});

export default customTheme;
