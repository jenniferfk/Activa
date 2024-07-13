import React, {useRef, useEffect } from 'react';
import { View, Text, Image, Animated, Pressable } from 'react-native';
import foodTypes from '../assets/foodtypes';
import { FoodType } from '../assets/foodtypes';
import { useNavigation } from '@react-navigation/native';
import { MainNavigatorRecipeStackProp } from '../navigation/MainNavigator.type';
import { foodTypeStyle } from '../assets/Styles/FoodTyleStyle';

interface props{
  isRecipesScreen: boolean;
}

export const FoodTypesList = ({isRecipesScreen}:props) => {
    return (
        <View>
          <Text style={foodTypeStyle.choosetext}>Choose a Category </Text>
          {foodTypes.reduce<JSX.Element[]>((rows, foodType, index) => {
            if (index % 2 === 0) {
              rows.push(
                <View key={index} style={foodTypeStyle.foodTypeRow}>
                 <FoodTypeItem foodType={foodType} isRecipesScreen={isRecipesScreen} />
                  {foodTypes[index + 1] && <FoodTypeItem foodType={foodTypes[index + 1]} isRecipesScreen={isRecipesScreen}/>}
                </View>
              );
            }
            return rows;
          }, [])}
        </View>
      );
    };
    
    interface FoodTypeItemProps {
      foodType: FoodType;
      isRecipesScreen: boolean;
    }
    
    const FoodTypeItem = ({ foodType, isRecipesScreen }: FoodTypeItemProps) => {
      const rotationAnimation = useRef(new Animated.Value(0)).current;
      const navigation = useNavigation<MainNavigatorRecipeStackProp>();

      const navigatetorecipelist = (type:string) => {
          navigation.navigate('RecipeListStack', { type });
        };
      const startRotation = () => {
        rotationAnimation.setValue(0); 
        Animated.timing(rotationAnimation, {
          toValue: 2,
          duration: 1000,
          useNativeDriver: true,
        }).start();
      };
    
      const interpolatedRotation = rotationAnimation.interpolate({
        inputRange: [0, 2],
        outputRange: ['0deg', '720deg'],
      });
    
      const rotateStyle = {
        transform: [{ rotate: interpolatedRotation }],
      };
    
      useEffect(() => {
        if (isRecipesScreen) {
          startRotation(); 
          const intervalId = setInterval(startRotation, 30000);
          return () => clearInterval(intervalId); 
        }
      }, [isRecipesScreen]);
    
      return (
        <Pressable onPress={() => navigatetorecipelist(foodType.type)}>
          <Animated.View style={[foodTypeStyle.foodTypeContainer, rotateStyle]}>
            <Image source={foodType.image} style={foodTypeStyle.foodTypeImage} />
            <Text style={foodTypeStyle.foodTypeName}>{foodType.type}</Text>
          </Animated.View>
        </Pressable>
      );
    };
export default FoodTypesList;
