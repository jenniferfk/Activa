import { StyleSheet } from "react-native";
import { appItalicFont, appRegularFont, windowHeight } from "../styles";

export const LoginScreenStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(19,34,51)',
    },
    content: {
      marginTop:windowHeight*0.1,
      alignItems:'center',
      justifyContent:'center'
    },
    text: {
      fontSize: windowHeight*0.032,
      color: 'white',
      fontFamily:appRegularFont,
      alignSelf:'center',
      marginTop:windowHeight*0.1
    },
    italic:{
      fontFamily:appItalicFont,
      color:'rgb(243,147,32)'
    },
    input: {
      backgroundColor: 'white',
      width: '80%',
      borderRadius: 8,
      padding: 10,
      marginBottom: 10,
    },
  
  });