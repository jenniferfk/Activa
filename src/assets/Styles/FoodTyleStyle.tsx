import { StyleSheet } from "react-native";
import { appItalicFont, appRegularFont, windowHeight, windowWidth } from "../styles";

export const foodTypeStyle = StyleSheet.create({
    foodTypeRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 20,
      paddingHorizontal: 50,
    },
    foodTypeContainer: {
      alignItems: 'center',
    },
    foodTypeImage: {
      width: windowWidth*0.24,
      height: windowHeight*0.12,
      borderRadius: 50,
    },
    foodTypeName: {
      color: 'rgba(217, 217, 219, 0.6)',
      marginTop: 5,
      fontFamily: appItalicFont,
    },
    choosetext: {
      color: 'white',
      fontFamily: appRegularFont,
      alignSelf: 'center',
    },
  });