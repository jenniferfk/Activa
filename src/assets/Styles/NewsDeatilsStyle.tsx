import { StyleSheet } from "react-native";
import { appRegularFont, windowHeight, windowWidth } from "../styles";

export const NewsDetailsStyle= StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(19,34,51)',
    },
    image: {
      width: "100%",
      height: windowHeight * 0.3,
      borderRadius: 10,
    },
    contentContainer: {
      padding: 10,
    },
    contentText: {
      color: 'white',
      marginBottom:windowHeight*0.02,
      fontFamily:appRegularFont
    },
    nametext:{
      color:'white',
      fontFamily:appRegularFont,
      fontSize: windowWidth*0.058,
      alignSelf:'center'
    },
    imageContainer: {
      position: 'relative',
    },
    goBackButton: {
      position: 'absolute',
      top: 10,
      left: 10,
    },
    pubdate:{
      fontFamily:appRegularFont,
      color:'gray'
    }
  
  });