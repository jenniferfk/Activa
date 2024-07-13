import { StyleSheet } from "react-native";
import { appRegularFont, windowHeight } from "../styles";

export const SignUpStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(19,34,51)',
    },
    loadingContainer: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1, 
    },
    input:{
      backgroundColor: 'white',
      width: '80%',
      borderRadius: 8,
      padding: 10,
      marginBottom: 10,
      color:'black',
      fontFamily:appRegularFont 
    },
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    inputWrapper: {
      flex: 1,
      marginRight: 10,
    },
    halfWidth: {
      width: '48%', 
    },
    halfInput: {
      flex: 1,
    },
    errorText: {
      color: 'rgb(243,147,32)',
      fontSize: 12,
    },
    signupform:{
      margin:windowHeight*0.02,
      marginTop:windowHeight*0.1
    },
    signuptext:{
      alignSelf:'center',
      marginTop:windowHeight*0.056,
      fontFamily:'Sedan-Regular',
      fontSize:windowHeight*0.03,
      color:'lightgray'
  
    },
    signupbttn:{
      backgroundColor: 'rgb(243,147,32)',
      padding: 10,
      borderRadius: 8,
      marginBottom: 10,
      width: '80%',
      alignItems: 'center',
      alignSelf:'center'
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    inputlegend:{
      color:'lightgray'
    },
    goBackButton: {
      position: 'absolute',
      top: 10,
      left: 10,
    },
  })