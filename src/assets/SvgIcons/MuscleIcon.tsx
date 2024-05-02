import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface MusclesProps {
    size: number;
    focused: boolean;
}

const MuscleIcon = ({size,focused}:MusclesProps) => {
  const color = focused ? 'rgb(243,147,32)' : 'rgba(217, 217, 219, 0.6)';
  return(<Svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
  >
    <Path
      d="M21.37 36C22.82 30.75 27.89 27 33.73 27.62C39.29 28.21 43.71 32.9 43.99 38.48C44.06 39.95 43.86 41.36 43.43 42.67C43.17 43.47 42.39 44 41.54 44H11.7584C6.71004 44 2.92371 39.3814 3.91377 34.4311L9.99994 4H21.9999L25.9999 11L17.43 17.13L14.9999 14"
      stroke={color}
      strokeWidth={4}
      strokeMiterlimit={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17.4399 17.13L22 34"
      stroke={color}
      strokeWidth={4}
      strokeMiterlimit={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
  );
};
export default MuscleIcon;
