import { StyleSheet } from "react-native";
import { appItalicFont, appRegularFont, windowWidth } from "../styles";

export const didykStyle = StyleSheet.create({
    didYouKnow: {
      position: 'absolute',
      bottom: 20,
      alignSelf: 'center',
    },
    didYouKnowText: {
      fontSize: 11,
      fontFamily:appItalicFont,
      paddingLeft:windowWidth*0.05,
      paddingRight:windowWidth*0.05,
      color:'lightgray'
    },
    dyk:{
      fontFamily:appRegularFont,
      alignSelf:'center',
      color:'gray'
    }
  });