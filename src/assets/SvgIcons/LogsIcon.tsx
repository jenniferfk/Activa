import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

interface LogsProps {
    size: number;
    focused:boolean;
}

const LogsIcon = ({size,focused}:LogsProps) => {

  const color = focused ? 'rgb(243,147,32)' : 'rgba(217, 217, 219, 0.6)';

  return(<Svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
  >
    <Rect width={48} height={48} fill="white" fillOpacity={0.01} />
    <Path
      d="M24 43.9998H8V3.99977H40V23.9998"
      stroke={color}
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M35.5 43.9998V30.9998"
      stroke={color}
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M31 34.4998L32.5 32.9998L35.5 29.9998L38.5 32.9998L40 34.4998"
      stroke={color}
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16 15.9998H32"
      stroke={color}
      strokeWidth={4}
      strokeLinecap="round"
    />
    <Path
      d="M16 23.9998H24"
      stroke={color}
      strokeWidth={4}
      strokeLinecap="round"
    />
  </Svg>
  );
};
export default LogsIcon;
