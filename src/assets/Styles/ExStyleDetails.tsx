import { StyleSheet } from "react-native";
import { appRegularFont, windowHeight, windowWidth } from "../styles";

export const ExDetailsStyle= StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(19,34,51)',
    },
    image: {
      width: "100%",
      height: windowHeight * 0.3,
      borderRadius: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 10,
      backgroundColor:'rgb(25,40,57)',
      width:'80%',
      alignSelf:'center',
      borderRadius:15
    },
    button: {
      margin: 10,
      padding:12,
      borderRadius: 5,
    },
    activeButton: {
     backgroundColor:'gray',
     borderRadius: 12,
    },
    buttonText: {
      color: 'gray',
      fontFamily:appRegularFont
    },
    activetext:{
      color:'white'
    },
    contentContainer: {
      padding: 10,
    },
    contentText: {
      color: 'white',
      marginBottom:windowHeight*0.02,
      fontFamily:appRegularFont,
      fontSize:windowWidth*0.035
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
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgb(19,34,51)',
      height: windowHeight,
  },
  });