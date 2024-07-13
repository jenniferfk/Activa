import { StyleSheet } from "react-native";
import { appRegularFont, windowHeight, windowWidth } from "../styles";

export const RecipeDetailsStyle= StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(19,34,51)',
    },
    row:{
      flexDirection:'row',
      padding:5
    },
    time:{
      fontFamily:appRegularFont,
      marginLeft:19,
      color:'gray'
    },
    image: {
      width: "100%",
      height: windowHeight * 0.32,
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
      padding: windowWidth*0.05,
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
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgb(19,34,51)',
      height: windowHeight,
  },
  recipetime:{
    padding:windowWidth*0.06,
  },
  progressBarWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  nutriText: {
    color: 'rgb(243,147,32)',
  },
  nutriview:{
    alignSelf:'center',
    
  },
  grams:{
    color:'lightgray'
  }
  });