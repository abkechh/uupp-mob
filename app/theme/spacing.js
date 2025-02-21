import metrics from "./metrics";

const baseSpacing = metrics.screenWidth / 100; // 1% of screen width

const spacing = {
  tiny: baseSpacing * 0.5,
  small: baseSpacing * 1,
  medium: baseSpacing * 2,
  large: baseSpacing * 3,
  xLarge: baseSpacing * 4,
};

export default spacing;
