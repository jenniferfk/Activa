import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../styles";

export const SearchInputStyle = StyleSheet.create({
    input: {
      backgroundColor:'rgba(211, 211, 211, 0.3)',
      width:0.85*windowWidth,
      height:0.06*windowHeight,
      borderRadius:50,
      alignSelf:'center',
      paddingLeft: 20,
      marginTop:0.003*windowHeight
    },
  });