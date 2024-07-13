import { StyleSheet } from "react-native";
import { appRegularFont, windowWidth } from "../styles";

export const ExListStyle = StyleSheet.create({
    outerContainer: {
        backgroundColor: 'transparent',
    },
    container: {
        marginBottom: 10
    },
    exerciseItemContainer: {
        marginBottom: 10,
        backgroundColor: '#F0F0F0',
        borderRadius: 10,
        position: 'relative',
        overflow: 'hidden',
    },
    exerciseImage: {
        width: '100%',
        aspectRatio: 4 / 2,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    exerciseTextContainer: {
        padding: 10,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    exerciseName: {
        fontSize: windowWidth*0.04,
        color: 'white',
        fontFamily: appRegularFont
    },
    exerciseCalories: {
        fontSize: windowWidth*0.035,
        color: 'white',
        position: 'absolute',
        top: 10,
        right: 10,
        paddingHorizontal: 8,
        borderRadius: 5,
        fontFamily: appRegularFont
    },
    clickIndicator: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        padding: 5,
    },
    clickText: {
        color: 'white',
        fontSize: windowWidth*0.04,
    },
  });