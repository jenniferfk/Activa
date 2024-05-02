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

export const AppStyles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(19,34,51)',
      },
})

export const NavStyles = StyleSheet.create({
    whatsnew:{
        alignSelf:'center',
        fontFamily:appRegularFont,
        fontSize:21,
        color:'rgb(243,147,32)',
        padding:12
      }
})

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
 
export const SearchInputStyle = StyleSheet.create({
  input: {
    backgroundColor:'rgba(211, 211, 211, 0.3)',
    width:0.85*windowWidth,
    height:0.06*windowHeight,
    borderRadius:50,
    alignSelf:'center',
    paddingLeft: 20,
    marginTop:0.003*windowHeight
  },
});

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

export const didykStyle = StyleSheet.create({
  didYouKnow: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  didYouKnowText: {
    fontSize: 11,
    fontFamily:appItalicFont,
    paddingLeft:windowWidth*0.05,
    paddingRight:windowWidth*0.05,
    color:'lightgray'
  },
  dyk:{
    fontFamily:appRegularFont,
    alignSelf:'center',
    color:'gray'
  }
});
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

export const LoginFormStyle = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    color:'black'
  },
  textInput: {
    fontFamily: appRegularFont,
  },
  pressable: {
    backgroundColor: 'rgb(243,147,32)',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontFamily: appRegularFont,
  },
  promptText: {
    textAlign: 'center',
    color: 'gray',
    fontFamily: appRegularFont,
    marginTop: 10,
  },
  logintext:{
    fontFamily:appRegularFont,
    fontSize:windowHeight*0.038,
    color:'gray'
  },
  signUpText: {
    color: 'rgb(243,147,32)',
    textDecorationLine: 'underline',
  },

});

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

export const daylogsStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  caloriescontainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:windowWidth*0.06,
    marginBottom:windowHeight*0.02
  },
  caloriestext:{
  fontFamily:appRegularFont,
  fontSize:windowWidth*0.03,
  color:'white'
    }
});
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

export const LoginScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(19,34,51)',
  },
  content: {
    marginTop:windowHeight*0.1,
    alignItems:'center',
    justifyContent:'center'
  },
  text: {
    fontSize: windowHeight*0.032,
    color: 'white',
    fontFamily:appRegularFont,
    alignSelf:'center',
    marginTop:windowHeight*0.1
  },
  italic:{
    fontFamily:appItalicFont,
    color:'rgb(243,147,32)'
  },
  input: {
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },

});
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
export const NewsDetailsStyle= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(19,34,51)',
  },
  image: {
    width: "100%",
    height: windowHeight * 0.3,
    borderRadius: 10,
  },
  contentContainer: {
    padding: 10,
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
  pubdate:{
    fontFamily:appRegularFont,
    color:'gray'
  }

});

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

export const SignUpStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(19,34,51)',
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1, 
  },
  input:{
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    color:'black',
    fontFamily:appRegularFont 
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  inputWrapper: {
    flex: 1,
    marginRight: 10,
  },
  halfWidth: {
    width: '48%', 
  },
  halfInput: {
    flex: 1,
  },
  errorText: {
    color: 'rgb(243,147,32)',
    fontSize: 12,
  },
  signupform:{
    margin:windowHeight*0.02,
    marginTop:windowHeight*0.1
  },
  signuptext:{
    alignSelf:'center',
    marginTop:windowHeight*0.056,
    fontFamily:'Sedan-Regular',
    fontSize:windowHeight*0.03,
    color:'lightgray'

  },
  signupbttn:{
    backgroundColor: 'rgb(243,147,32)',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    width: '80%',
    alignItems: 'center',
    alignSelf:'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  inputlegend:{
    color:'lightgray'
  },
  goBackButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
})