// TODO: write documentation for colors and palette in own markdown file and add links from here
// import { useStores } from "../models"

const palette = {
  neutral100: "#FFFFFF",
  neutral200: "#F4F2F1",
  neutral300: "#D7CEC9",
  neutral400: "#B6ACA6",
  neutral500: "#978F8A",
  neutral600: "#564E4A",
  neutral700: "#3C3836",
  neutral800: "#191015",
  neutral900: "#000000",

  primary100: "#F4E0D9",
  primary200: "#E8C1B4",
  primary300: "#DDA28E",
  primary400: "#D28468",
  primary500: "#C76542",
  primary600: "#A54F31",

  secondary100: "#DCDDE9",
  secondary200: "#BCC0D6",
  secondary300: "#9196B9",
  secondary400: "#626894",
  secondary500: "#41476E",

  accent100: "#FFEED4",
  accent200: "#FFE1B2",
  accent300: "#FDD495",
  accent400: "#FBC878",
  accent500: "#FFBB50",

  // New Colors
  Black: "#000",
  grey: "#918C8C",
  blue: "#0712B1",
  placeHolerGrey: "rgba(149, 142, 142, 0.74902)",
  lineBorder: "#707070",
  white: "#fff",
  borderGrey: "#AEACAC",
  darkMode: "#1A1818",
  lightBlue: "#E0E1FB",
  lightGrey: "#F9F8F8",
  navyBlue: "#082032",

  midGrey: "#CEC9C9",

  yello: "#D7E323",
  red: "#DF0F0F",
  green: "#1BCE33",

  angry100: "#F2D6CD",
  angry500: "#C03403",

  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",

  overBlue: "#CDCEE6",
  drakGrey: "#AEACAC",
  greBorder: "#AEACAC",
} as const


// const {userStore} = useStores();

export const colors = {

  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names asmuch as possible.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The default text color in many components.
   */
  text: palette.neutral800,
  /**
   * Secondary text information.
   */
  textDim: palette.neutral600,
  /**
   * The default color of the screen background.
   */
  background: palette.neutral200,

  darkBackground: palette.navyBlue,

  darkText: palette.white,
  /**
   * The default border color.
   */
  border: palette.neutral400,
  /**
   * The main tinting color.
   */
  tint: palette.primary500,
  /**
   * A subtle color used for lines.
   */
  separator: palette.neutral300,
  /**
   * Error messages.
   */
  error: palette.angry500,
  /**
   * Error Background.
   *
   */
  errorBackground: palette.angry100,

  // grey

  greyColor: palette.grey,

  // Black

  blackColor: palette.Black,

  // Blue

  blueColor: palette.blue,

  // Login borderLine

  line: palette.lineBorder,

  // White color

  white: palette.white,

  // PlaceHolderGrey

  placeholderGry: palette.placeHolerGrey,

  //  navBorderGrey

  navBorderGrey: palette.borderGrey,

  // Light
  lightBlue: palette.lightBlue,

  // Light
  lightGrey: palette.lightGrey,

  yellow: palette.yello,

  red: palette.red,

  green: palette.green,

  ligthNavy: '#E0E1FB',
  //  Mid grey

  midGrey: palette.midGrey,
  overBlue: palette.overBlue,
  drakGrey: palette.drakGrey,
  greyBorder: palette.greBorder,
}

// background: #E0E1FB;
