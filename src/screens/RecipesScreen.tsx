import { View, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import FoodTypesList from '../molecules/FoodTypesList'
import { useIsFocused } from '@react-navigation/native';
import { windowHeight } from '../assets/styles';

const RecipesScreen = () => {
  const isFocused = useIsFocused();
  const [isRecipesScreen, setIsRecipesScreen] = useState(false);

  useEffect(() => {
    if (isFocused) {
      setIsRecipesScreen(true);
    } else {
      setIsRecipesScreen(false);
    }
  }, [isFocused]);

  return (
    <ScrollView style={styles.container}>
      <FoodTypesList isRecipesScreen={isRecipesScreen} />
    </ScrollView>
  )
}

export default RecipesScreen


const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'rgb(19,34,51)',
    padding: 0.02 * windowHeight,
  }
})