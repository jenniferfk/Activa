import { StyleSheet } from "react-native";
import { appRegularFont, windowHeight } from "../styles";

export const LoginFormStyle = StyleSheet.create({
    input: {
      backgroundColor: 'white',
      width: '80%',
      borderRadius: 8,
      padding: 10,
      marginBottom: 10,
      color:'black'
    },
    textInput: {
      fontFamily: appRegularFont,
    },
    pressable: {
      backgroundColor: 'rgb(243,147,32)',
      padding: 10,
      borderRadius: 8,
      marginBottom: 10,
      width: '80%',
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontFamily: appRegularFont,
    },
    promptText: {
      textAlign: 'center',
      color: 'gray',
      fontFamily: appRegularFont,
      marginTop: 10,
    },
    logintext:{
      fontFamily:appRegularFont,
      fontSize:windowHeight*0.038,
      color:'gray'
    },
    signUpText: {
      color: 'rgb(243,147,32)',
      textDecorationLine: 'underline',
    },
  
  });