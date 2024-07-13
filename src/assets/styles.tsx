import { Dimensions, StyleSheet } from "react-native";
import { Platform } from 'react-native';

const isIOS = Platform.OS === 'ios';

export const windowHeight = Dimensions.get('window').height;
export const windowWidth = Dimensions.get('window').width;

const iosFontRegular = 'Italianno-Regular';
const iosFontItalic = 'Redressed-Regular';
const androidFontRegular = 'Sedan-Regular';
const androidFontItalic = 'Sedan-Italic';

export const appRegularFont = isIOS ? iosFontRegular : androidFontRegular;
export const appItalicFont = isIOS ? iosFontItalic : androidFontItalic;


export const NavStyles = StyleSheet.create({
    whatsnew:{
        alignSelf:'center',
        fontFamily:appRegularFont,
        fontSize:21,
        color:'rgb(243,147,32)',
        padding:12
      }
})