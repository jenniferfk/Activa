import { View, Text, Pressable, Image, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { MainNavigatorRecipeStackProp } from '../navigation/MainNavigator.type';
import { Recipe } from '../assets/interfaces';
import { renderrecipesStyle } from '../assets/Styles/RenderRecipesStyle';

interface RenderRecipesProps {
    recipe: Recipe;
  }

const RenderRecipes = ({ recipe }:RenderRecipesProps) => {
  const recipenavigation = useNavigation<MainNavigatorRecipeStackProp>();

  const navigatetorecipelist = (id:number) => {
      recipenavigation.navigate('RecipeDetailsScreen', { id });
    };
    const renderRecipeItem = ({ item }: { item: Recipe }) => (
        
        <Pressable onPress={() => navigatetorecipelist(item.id)}>
          <View style={renderrecipesStyle.container}>
            <View style={renderrecipesStyle.recipeItemContainer}>
              <Image source={{ uri: item.image }} style={renderrecipesStyle.recipeImage} />
              <View style={renderrecipesStyle.overlay} />
              <Text style={renderrecipesStyle.recipeCalories}>{item.calories} calories/serving</Text>
              <View style={renderrecipesStyle.recipeTextContainer}>
                <Text style={renderrecipesStyle.recipeName}>{item.name}</Text>
              </View>
              <View style={renderrecipesStyle.clickIndicator}>
                <Text style={renderrecipesStyle.clickText}>&gt;</Text>
              </View>
            </View>
          </View>
        </Pressable>
      );
    
      return (
        <View style={renderrecipesStyle.outerContainer}>
          <FlatList
            data={[recipe]}
            renderItem={renderRecipeItem}
            keyExtractor={(item) => `${item.id}`}
            scrollEnabled={false}
          />
        </View>
      );
    };

export default RenderRecipes