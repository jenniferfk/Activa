import * as React from "react";
import Svg, { G, Polygon } from "react-native-svg";

interface AddRecipeProps {
    size: number;
    focused:boolean;
}

const AddRecipeIcon = ({size,focused}:AddRecipeProps) => {

  const color = focused ? 'rgb(243,147,32)' : 'rgba(217, 217, 219, 0.6)';

  return(<Svg
    fill={color}
    width={size}
    height={size}
    viewBox="0 0 16 16"
  >
    <G>
      <Polygon points="14 7.11 8.9 7.11 8.9 2.01 7.1 2.01 7.1 7.11 2 7.11 2 8.91 7.1 8.91 7.1 13.99 8.9 13.99 8.9 8.91 14 8.91 14 7.11" />
    </G>
  </Svg>);
};
export default AddRecipeIcon;
