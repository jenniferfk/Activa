import { StyleSheet } from "react-native";
import { appRegularFont, windowWidth } from "../styles";

export const renderrecipesStyle = StyleSheet.create({
    outerContainer: {
      backgroundColor: 'transparent',
    },
    container: {
      marginBottom: 10,
    },
    recipeItemContainer: {
      marginBottom: 10,
      backgroundColor: '#F0F0F0',
      borderRadius: 10,
      position: 'relative',
      overflow: 'hidden',
    },
    recipeImage: {
      width: '100%',
      aspectRatio: 4 / 2,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    recipeTextContainer: {
      padding: 10,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
    recipeName: {
      fontSize: windowWidth*0.04,
      color: 'white',
      fontFamily:appRegularFont,
    },
    recipeCalories: {
      fontSize: windowWidth*0.035,
      color: 'white',
      position: 'absolute',
      top: 10,
      right: 10,
      paddingHorizontal: 8,
      borderRadius: 5,
      fontFamily: appRegularFont,
    },
    clickIndicator: {
      position: 'absolute',
      bottom: 10,
      right: 10,
      padding: 5,
    },
    clickText: {
      color: 'white',
      fontSize: windowWidth*0.05,
    },
  });