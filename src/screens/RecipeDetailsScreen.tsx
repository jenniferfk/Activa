import { View, Text, KeyboardAvoidingView, ActivityIndicator, ScrollView, Image, Pressable } from 'react-native'
import React, { PropsWithChildren, useEffect, useState } from 'react'
import { MainNavigatorRecipeStackList } from '../navigation/MainNavigator.type';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { fetchRecipeData } from '../molecules/FetchRecipesData';
import BackButton from '../assets/SvgIcons/BackButton';
import ClockIcon from '../assets/SvgIcons/ClockIcon';
import AddedBy from '../assets/SvgIcons/AddedBy';
import CaloriesIcon from '../assets/SvgIcons/CaloriesIcon';
import { Recipe } from '../assets/interfaces';
import { windowWidth } from '../assets/styles';
import { RecipeDetailsStyle } from '../assets/Styles/RecipeDetailsStyle';

type RecipeDetailsScreenRouteProp = RouteProp<MainNavigatorRecipeStackList, 'RecipeDetailsScreen'>;

type Props = {
  route: RecipeDetailsScreenRouteProp;
};
interface RenderRecipesProps {
  recipe: Recipe;
}

const RecipeDetailsScreen = ({ route }: PropsWithChildren<Props>) => {
  const { id } = route.params;

  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [showSteps, setshowSteps] = useState<boolean>(true);
  const [showIngredients, setshowIngredients] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchRecipeData(1);
        const foundRecipe = data.find((item: Recipe) => item.id === id);
        if (foundRecipe) {
          setRecipe(foundRecipe);
        }
      } catch (error) {
       // console.error('Error fetching recipes:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [id]);
  
  const toggleInstructions = () => {
    setshowSteps(!showSteps);
    setshowIngredients(false); 
  };

  const toggleTargeting = () => {
    setshowIngredients(!showIngredients);
    setshowSteps(false); 
  };

  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={RecipeDetailsStyle.container} behavior="padding">
      {loading ? (
      <View style={RecipeDetailsStyle.loadingContainer}>
        <ActivityIndicator size="large" color="white" />
         </View>
     ) : (
    <ScrollView>
    <View style={RecipeDetailsStyle.container}>
      {recipe &&(
      <View style={RecipeDetailsStyle.imageContainer}>
       {recipe && <Image source={{ uri: recipe?.image }} style={RecipeDetailsStyle.image} />}
      <Pressable onPress={() => navigation.goBack()} style={RecipeDetailsStyle.goBackButton}>
        <BackButton size={windowWidth*0.1} />
      </Pressable>
    </View>)}
      
      <View>
        <Text style={RecipeDetailsStyle.nametext}>{recipe?.name} </Text>
      </View>
      <View style={RecipeDetailsStyle.recipetime}>
        <View style={RecipeDetailsStyle.row}>
          <ClockIcon size={windowWidth*0.08}/> 
          <Text style={RecipeDetailsStyle.time}>{recipe?.time} minutes </Text>
        </View>
        <View style={RecipeDetailsStyle.row}>
          <AddedBy size={windowWidth*0.07}/> 
          <Text style={RecipeDetailsStyle.time}>Added By {recipe?.addedBy} </Text>
        </View>
        <View style={RecipeDetailsStyle.row}>
          <CaloriesIcon size={windowWidth*0.095}/> 
          <Text style={RecipeDetailsStyle.time}>{recipe?.calories} Kcal</Text>
        </View>
      </View>
      <View>
        <Text style={RecipeDetailsStyle.nutriview}>
        <Text style={RecipeDetailsStyle.nutriText}>Protein:</Text> <Text style={RecipeDetailsStyle.grams}>{recipe?.protein}g{' '}</Text>
        <Text style={RecipeDetailsStyle.nutriText}>Fat:</Text><Text style={RecipeDetailsStyle.grams}> {recipe?.fat}g{' '}</Text>
        <Text style={RecipeDetailsStyle.nutriText}>Carbs:</Text> <Text style={RecipeDetailsStyle.grams}>{recipe?.carbs}g</Text>
        </Text>
    </View>
      <View style={RecipeDetailsStyle.buttonContainer}>
      <Pressable
        onPress={toggleInstructions}
        style={[RecipeDetailsStyle.button, showSteps && RecipeDetailsStyle.activeButton]}
      >
        <Text style={[RecipeDetailsStyle.buttonText,showSteps && RecipeDetailsStyle.activetext]}>Steps</Text>
      </Pressable>
      <Pressable
        onPress={toggleTargeting}
        style={[RecipeDetailsStyle.button, showIngredients && RecipeDetailsStyle.activeButton]}
      >
        <Text style={[RecipeDetailsStyle.buttonText,showIngredients && RecipeDetailsStyle.activetext]}>Ingredients</Text>
      </Pressable>

      </View>
      {showIngredients && (
        <View style={RecipeDetailsStyle.contentContainer}>
        {recipe?.ingredients.map((ingredient, index) => (
          <Text key={index} style={RecipeDetailsStyle.contentText}>
            {`${index + 1}. ${ingredient}`}
          </Text>
        ))}
      </View>
      )}

      {showSteps && (
        <View style={RecipeDetailsStyle.contentContainer}>
          {recipe?.steps.map((step, index) => (
            <Text key={index} style={RecipeDetailsStyle.contentText}>
              {`${index + 1}. ${step}`}
            </Text>
          ))}
        </View>
      )}

     </View>
    </ScrollView>)}
    </KeyboardAvoidingView>
  )
}
export default RecipeDetailsScreen
