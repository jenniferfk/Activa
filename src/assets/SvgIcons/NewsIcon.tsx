import * as React from "react";
import Svg, { Path, Rect, Line } from "react-native-svg";

interface NewsProps {
    size: number;
    focused:boolean;
}

const NewsIcon = ({size,focused}:NewsProps) => {

    const color = focused ? 'rgb(243,147,32)' : 'rgba(217, 217, 219, 0.6)';

  return (
  <Svg
    id="Layer_1"
    viewBox="0 0 32 32"
    width={size}
    height={size}
  >
    <Path
     fill="none"
      stroke={color}
      strokeWidth={2}
      strokeMiterlimit={10}
      d="M25,26H7c-1.7,0-3-1.3-3-3V6h18v7"
    />
    <Path
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeMiterlimit={10}
      d="M25,26L25,26c-1.7,0-3-1.3-3-3V13h6v10 C28,24.7,26.7,26,25,26z"
    />
    <Rect
      x={8}
      y={10}
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeMiterlimit={10}
      width={10}
      height={3}
    />
    <Line
     fill="none"
      stroke={color}
      strokeWidth={2}
      strokeMiterlimit={10}
      x1={7}
      y1={16}
      x2={12}
      y2={16}
    />
    <Line
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeMiterlimit={10}
      x1={14}
      y1={16}
      x2={19}
      y2={16}
    />
    <Line
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeMiterlimit={10}
      x1={7}
      y1={19}
      x2={12}
      y2={19}
    />
    <Line
      fill={color}
      stroke={color}
      strokeWidth={2}
      strokeMiterlimit={10}
      x1={14}
      y1={19}
      x2={19}
      y2={19}
    />
    <Line
      fill={color}
      stroke={color}
      strokeWidth={2}
      strokeMiterlimit={10}
      x1={7}
      y1={22}
      x2={12}
      y2={22}
    />
    <Line
      fill={color}
      stroke={color}
      strokeWidth={2}
      strokeMiterlimit={10}
      x1={14}
      y1={22}
      x2={19}
      y2={22}
    />
  </Svg>
);
}
export default NewsIcon;
