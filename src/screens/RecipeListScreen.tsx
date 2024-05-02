import { View, Text, StyleSheet, Pressable, ActivityIndicator } from 'react-native';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { MainNavigatorRecipeStackList } from '../navigation/MainNavigator.type';
import { fetchRecipeData } from '../molecules/FetchRecipesData';
import RenderRecipes from '../molecules/RenderRecipes';
import BackButton from '../assets/SvgIcons/BackButton';
import { appRegularFont, windowHeight, windowWidth } from '../assets/styles';
import { Recipe } from '../assets/interfaces';

type RecipeListScreenRouteProp = RouteProp<MainNavigatorRecipeStackList, 'RecipeListStack'>;

type Props = {
  route: RecipeListScreenRouteProp;
};

const RecipeListScreen = ({ route }: PropsWithChildren<Props>) => {
  const { type } = route.params;

  const [recipes, setRecipes] = useState<Recipe[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchRecipeData(1);
        const foundRecipes = data.filter((item: Recipe) => item.type === type);
        if (foundRecipes.length > 0) {
          setRecipes(foundRecipes);
        }
      } catch (error) {
        console.error('Error fetching recipes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type]);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()} style={styles.goBackButton}>
        <BackButton size={windowWidth * 0.1} />
      </Pressable>
      <Text style={styles.typetitle}>{type} Recipes</Text>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#ffffff" />
        </View>
      ) : (
        <View>
          {recipes && recipes.map(recipe => (
            <RenderRecipes key={recipe.id} recipe={recipe} />
          ))}
        </View>
      )}
    </View>
  );
};

export default RecipeListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(19,34,51)',
    padding: 0.02 * windowHeight,
  },
  typetitle: {
    fontFamily: appRegularFont,
    alignSelf: 'center',
    fontSize: windowWidth * 0.06,
    marginTop: windowHeight * 0.03,
    color:'gray'
  },
  goBackButton: {
    position: 'absolute',
    top: windowHeight * 0.01,
    left: windowWidth * 0.02,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
