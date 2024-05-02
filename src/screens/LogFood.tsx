import { ActivityIndicator, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren, useEffect, useState } from 'react'
import { fetchRecipeData } from '../molecules/FetchRecipesData'
import BackButton from '../assets/SvgIcons/BackButton'
import { RouteProp, useNavigation } from '@react-navigation/native'
import { MainNavigatorLogsStackList } from '../navigation/MainNavigator.type'
import { appRegularFont, windowHeight, windowWidth } from '../assets/styles'
import { Recipe } from '../assets/interfaces'
import Config from 'react-native-config'
import AsyncStorage from '@react-native-async-storage/async-storage'

type LogFoodScreenRouteProp = RouteProp<MainNavigatorLogsStackList, 'LogFood'>;

 const API_LOGGEDFOOD= Config.API_LOGGEDFOOD||'';

type Props = {
  route: LogFoodScreenRouteProp;
};

const LogFood = ({ route }: PropsWithChildren<Props>) => {
  const navigation = useNavigation();
  const [recipes, setRecipes] = useState<Recipe[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [emaill,setEmaill]= useState('');

  const fetchUserData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('userEmail');
      if (jsonValue) {
        const userDataa = JSON.parse(jsonValue);
        setEmaill(userDataa.email);
      }
    } catch (error) {
    }
  };

  useEffect(() => {
    fetchUserData();
    const fetchData = async () => {
      try {
        const data = await fetchRecipeData(1);
        if (data) {
          setRecipes(data);
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const MAX_NAME_LENGTH = 20; 

  const truncateName = (name:string) => {
    if (name.length > MAX_NAME_LENGTH) {
      return name.substring(0, MAX_NAME_LENGTH - 3) + '...';
    }
    return name;
  };

  const handleAddButtonPress = async (recipe: Recipe) => {
    const today = new Date().toISOString().slice(0, 10); 
    const body = JSON.stringify({
      email:emaill,
      name: recipe.name,
      calories: recipe.calories,
      date: today,
    });

    try {
      const response = await fetch(API_LOGGEDFOOD, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      });
      if (response.ok) {
      }
    } catch (error) {
    }
  };

  
  return (
    <ScrollView style={styles.container}>
      <Pressable onPress={() => navigation.goBack()} style={styles.goBackButton}>
        <BackButton size={windowWidth*0.1} />
      </Pressable>
      {loading ? (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="white" />
         </View>
     ) : (
      
      <View style={styles.recipescontainer}>
        {recipes && recipes.map(recipe => (
             <View style={styles.row} key={recipe.id}>
               <Image source={{ uri: recipe.image }} style={styles.recipeImage} />
               <View>
              <Text style={styles.recipeName} numberOfLines={2}>{truncateName(recipe.name)}</Text>
               <Text style={styles.recipeCalories}>{recipe.calories} calories/serving</Text>
               </View>
               <Pressable style={styles.addbutton} onPress={()=>handleAddButtonPress(recipe)}>
                <Text>+</Text>
               </Pressable>
           </View>
          ))}
      </View>
     )}
    </ScrollView>
  )
}

export default LogFood


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'rgb(19,34,51)',
    padding:windowWidth*0.02
  },
  goBackButton: {
    position: 'absolute',
    top: windowHeight*0.014,
    left: windowWidth*0.014,
  },
  recipescontainer:{
    top:windowHeight*0.1,
    marginBottom:windowHeight*0.1
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(19,34,51)',
    height: windowHeight,
},
row:{
  flexDirection:'row',
  marginBottom:windowHeight*0.02,
  justifyContent:'space-between'
},
recipeImage: {
  width: windowWidth*0.2,
  height: windowWidth*0.2,
  borderRadius: 40,
  left:windowWidth*0.02
},
recipeName: {
  fontSize: windowWidth*0.03,
  fontFamily:appRegularFont
},
recipeCalories: {
  fontSize: windowWidth*0.03,
  color: '#888',
  fontFamily:appRegularFont
},
addbutton:{
  right:windowWidth*0.02
},
recipenamewidth:{
  alignSelf:'center'
}
  
})