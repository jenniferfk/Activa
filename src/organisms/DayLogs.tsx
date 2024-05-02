import React from 'react';
import { View, Text } from 'react-native';
import LogContainer from '../atoms/LogContainer';
import { useNavigation } from '@react-navigation/native';
import { MainNavigatorLogsStackProp } from '../navigation/MainNavigator.type';
import {  daylogsStyle } from '../assets/styles';

interface Props {
  selectedDate: Date;
  email:string;
  loggedrecipes: any[],
  calories:number;
  onDelete: (index: string) => void;
}

const DayLogs= ({ selectedDate,email,loggedrecipes,calories,onDelete }:Props) => {
  const navigation = useNavigation<MainNavigatorLogsStackProp>();

  const openFood = (date:string, email:string) => {
    navigation.navigate('LogFood', { date,email });
  };
  return (
    <View style={daylogsStyle.container}>
        <View style={daylogsStyle.caloriescontainer}>
            <Text style={daylogsStyle.caloriestext}>Consumed Calories: {calories}</Text>
        </View>
      <LogContainer title='FOOD' buttonText='LOG FOOD' handleClick={()=>openFood(selectedDate.toDateString(),email)} array={loggedrecipes} empty='No food items logged yet.' onDelete={onDelete}/>
    </View>
  );
  
};


export default DayLogs;
