import {  Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainNavigatorForBottomTabsList, MainNavigatorLogsStackList, MainNavigatorNewsStackList, MainNavigatorRecipeStackList, MainNavigatorStackList } from './MainNavigator.type';
import ExercisesScreen from '../screens/ExercisesScreen';
import LogsScreen from '../screens/LogsScreen';
import RecipesScreen from '../screens/RecipesScreen';
import ExerciseDetailsScreen from '../screens/ExerciseDetailsScreen';
import MuscleIcon from '../assets/SvgIcons/MuscleIcon';
import RecipeIcon from '../assets/SvgIcons/RecipeIcon';
import LogsIcon from '../assets/SvgIcons/LogsIcon';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipeListScreen from '../screens/RecipeListScreen';
import RecipeDetailsScreen from '../screens/RecipeDetailsScreen';
import NewsScreen from '../screens/NewsScreen';
import NewsIcon from '../assets/SvgIcons/NewsIcon';
import NewsDetails from '../screens/NewsDetails';
import LogFood from '../screens/LogFood';

const MainTabNavigator = createBottomTabNavigator<MainNavigatorForBottomTabsList>();
const ExerciseStack= createNativeStackNavigator<MainNavigatorStackList>();
const RecipesStack= createNativeStackNavigator<MainNavigatorRecipeStackList>();
const NewsStack=createNativeStackNavigator<MainNavigatorNewsStackList>();
const LogStack= createNativeStackNavigator<MainNavigatorLogsStackList>();

const windowWidth = Dimensions.get('window').width;

const ActivaAppNavigator = () => {
  return (
    <MainTabNavigator.Navigator
    screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard:true,
        tabBarIcon: ({ color, focused }) => {
          let icon;
          if (route.name === 'Exercises') {
            icon = <MuscleIcon size={23} focused={focused}/>;
          }
          else if (route.name === 'Recipes') {
            icon = <RecipeIcon size={23} focused={focused}/>;
          }
          else if (route.name === 'Logs') {
            icon = <LogsIcon size={23} focused={focused}/>;
          }
          else if (route.name === 'News') {
            icon = <NewsIcon size={23} focused={focused}/>;
          }
          return icon;
        },
        tabBarStyle: styles.tabBar,
        tabBarLabel: ({ focused }) => {
            let labelColor = focused ? 'rgb(243,147,32)' : 'rgba(217, 217, 219, 0.6)'; 
            let label;
            if (route.name === 'Exercises') {
              label = 'Exercises';
            } else if (route.name === 'Recipes') {
              label = 'Recipes';
            } else if (route.name === 'Logs') {
              label = 'Plan';
            }
            else if (route.name === 'News') {
              label = 'News';
            }
            return <Text style={[styles.label, { color: labelColor }]}>{label}</Text>;
          },
        
      })}
      
      >
        <MainTabNavigator.Screen name="Logs" component={LogsStackNav} />
        <MainTabNavigator.Screen name="Exercises" component={ExercisesDetailsStack} />
        <MainTabNavigator.Screen name="Recipes" component={RecipesListStack} />
        <MainTabNavigator.Screen name="News" component={NewsStackNav} />
      </MainTabNavigator.Navigator>
  )
}
const ExercisesDetailsStack = () => {
  return (
    <ExerciseStack.Navigator screenOptions={{ headerShown: false }}>
      <ExerciseStack.Screen name="ExercisesStack" component={ExercisesScreen}/>
      <ExerciseStack.Screen name="ExercisesDetailsScreen" component={ExerciseDetailsScreen} />
    </ExerciseStack.Navigator>
  );
};
const RecipesListStack=()=>{
  return (
    <RecipesStack.Navigator screenOptions={{ headerShown: false }}>
      <RecipesStack.Screen name="RecipesStack" component={RecipesScreen}/>
      <RecipesStack.Screen name="RecipeListStack" component={RecipeListScreen} />
      <RecipesStack.Screen name="RecipeDetailsScreen" component={RecipeDetailsScreen} />
    </RecipesStack.Navigator>
  );
};

const NewsStackNav=()=>{
  return (
    <NewsStack.Navigator screenOptions={{ headerShown: false }}>
      <NewsStack.Screen name="NewsStack" component={NewsScreen}/>
      <NewsStack.Screen name="NewsDetail" component={NewsDetails} />
    </NewsStack.Navigator>
  );
};

const LogsStackNav=()=>{
  return (
    <LogStack.Navigator screenOptions={{ headerShown: false }}>
      <LogStack.Screen name="LogsScreen" component={LogsScreen}/>
      <LogStack.Screen name="LogFood" component={LogFood} />
    </LogStack.Navigator>
  );
};


export default ActivaAppNavigator

const styles = StyleSheet.create({
    tabBar: {
      backgroundColor: 'rgb(25,40,57)',
    },
    label:{
        fontFamily:'Sedan-Regular',
        fontSize:0.017*windowWidth,
    }
  });
