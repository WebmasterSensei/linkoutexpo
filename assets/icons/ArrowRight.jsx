import React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowRight = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="#000000"
    fill="none"
  >
    <Path
      d="M12.5 18C12.5 18 18.5 13.5811 18.5 12C18.5 10.4188 12.5 6 12.5 6"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M5.50005 18C5.50005 18 11.5 13.5811 11.5 12C11.5 10.4188 5.5 6 5.5 6"
      stroke="currentColor"
      strokeWidth={props.strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default ArrowRight;
