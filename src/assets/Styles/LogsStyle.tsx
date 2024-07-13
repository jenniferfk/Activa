import { StyleSheet } from "react-native";
import { appRegularFont, windowHeight, windowWidth } from "../styles";

export const LogsStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(19,34,51)',
      padding: 0.025 * windowHeight,
    },
    dateContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'center',
      
    },
    dateText: {
      marginHorizontal: 10,
      fontSize: windowWidth*0.04,
      fontFamily:appRegularFont,
      color:'white'
    },
    row: {
      flexDirection: 'row',
      justifyContent:'space-between',
      
    },
    center:{
      justifyContent:'center',
      alignItems:'center'
    },
    arrowstyle:{
      color:'white'
    }
  });