import { StyleSheet } from "react-native";
import { appRegularFont, windowHeight, windowWidth } from "../styles";

export const ExCategoriesStyle = StyleSheet.create({
    choicesContainer: {
        flexDirection: 'row',
        marginTop: 0.01*windowHeight,
    },
    flatListContainer: {
        flexGrow: 1,
        justifyContent: 'flex-start',
    },
    choiceItem: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginRight: 10,
    },
    choiceText: {
        color: '#ffffff',
        fontSize: 0.035*windowWidth,
        fontFamily:appRegularFont
    },
    selectedChoiceItem: {
        backgroundColor: 'transparent',
    },
    selectedChoiceText: {
        color: 'rgb(243,147,32)',
        fontFamily:appRegularFont
    },
  });