import { Colors } from "./types";

export const baseColors = {
  failure: "#e02f58",
  primary: "#8e3ccf",
  primaryBright: "#dd831c",
  primaryDark: "#c25e00",
  secondary: "#d6931a", //
  success: "#dace31",
  warning: "#e68327",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#ffffff",
  secondary: "#222222", //
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#222222", //
  textDisabled: "#BDC2C4",
  textSubtle: "#8e3ccf",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  nav: "#222222", //
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#8e3ccf", //  
  background: "#24292f", //
  backgroundDisabled: "#424037", //
  contrast: "#FFFFFF",
  invertedContrast: "#262513",
  input: "#0d0f13",
  inputSecondary: "#8d8857",
  primaryDark: "#8f8104",
  tertiary: "#313131", //
  text: "#fcfae2", //
  textDisabled: "#717161", //
  textSubtle: "#ff7df5", //
  borderColor: "#61634b",
  card: "#0d0f13", //
  nav: "#0d0f13", //
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #3e3f42 0%, #2d2c2a 100%)", //
  },
};
