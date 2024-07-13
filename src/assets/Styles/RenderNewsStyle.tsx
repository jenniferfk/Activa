import { StyleSheet } from "react-native";
import { appRegularFont } from "../styles";

export const rendernewsStyle = StyleSheet.create({
    outerContainer: {
        backgroundColor: 'transparent',
        marginBottom: 10
    },
    container: {
        marginBottom: 10
    },
    postsItemContainer: {
        marginBottom: 10,
        backgroundColor: '#F0F0F0',
        borderRadius: 10,
        position: 'relative',
        overflow: 'hidden',
    },
    postsImage: {
        width: '100%',
        aspectRatio: 4 / 2,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    postsTextContainer: {
        padding: 10,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    postTitle: {
        fontSize: 16,
        color: 'white',
        fontFamily: appRegularFont
    },
    datepost: {
        fontSize: 14,
        color: 'white',
        position: 'absolute',
        top: 10,
        left: 10,
        paddingHorizontal: 8,
        borderRadius: 5,
        fontFamily: appRegularFont
    },
    clickIndicator: {
        position: 'absolute',
        top: 10,
        right: 10,
        padding: 5,
    },
    clickText: {
        color: 'white',
        fontSize: 18,
    },
  });