import metrics from "./metrics";

const scale = metrics.screenWidth / 375; // Base scaling on iPhone X width

const typography = {
  fontFamily: "System",
  fontSizes: {
    small: Math.round(12 * scale),
    regular: Math.round(14 * scale),
    medium: Math.round(16 * scale),
    large: Math.round(20 * scale),
    xLarge: Math.round(24 * scale),
  },
  fontWeights: {
    regular: "400",
    medium: "500",
    bold: "700",
  },
};

export default typography;
