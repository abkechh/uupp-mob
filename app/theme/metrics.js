import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const metrics = {
  screenWidth: width,
  screenHeight: height,
  isSmallDevice: width < 360,
  isMediumDevice: width >= 360 && width < 768,
  isLargeDevice: width >= 768,
};

export default metrics;
