import { StyleSheet } from "react-native";
import { appRegularFont, windowHeight, windowWidth } from "../styles";

export const daylogsStyle = StyleSheet.create({
    container: {
      flex: 1,
    },
    caloriescontainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      padding:windowWidth*0.06,
      marginBottom:windowHeight*0.02
    },
    caloriestext:{
    fontFamily:appRegularFont,
    fontSize:windowWidth*0.03,
    color:'white'
      }
  });