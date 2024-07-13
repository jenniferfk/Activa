import { StyleSheet } from "react-native";
import { appRegularFont, windowWidth } from "../styles";

export const LogContainerStyle = StyleSheet.create({
    container: {
      flex: 1,
    },
    logcontainer:{
      alignSelf:'center',
      backgroundColor:'rgb(25,40,57)',
      width:'100%',
      borderRadius:10,
      justifyContent: 'space-between',
      padding:windowWidth*0.03
    },
    button:{
      alignSelf:'flex-end',
      backgroundColor:'rgb(243,147,32)',
      borderRadius:10,
      marginTop:10
    },
    logContainerTexts:{
      padding:6,
      fontFamily:appRegularFont,
      fontSize:13,
      color:'white'
    },
    loggedview:{
      flexDirection:'row',
      justifyContent:'space-between'
    },
    deleteButton: {
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
      width: 75,
    },
  });