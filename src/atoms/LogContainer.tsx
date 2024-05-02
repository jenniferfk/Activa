import { Pressable, Text, View } from 'react-native'
import React from 'react'
import { LogContainerStyle } from '../assets/styles';
import { Swipeable } from 'react-native-gesture-handler';

interface props {
title:string;
buttonText:string
handleClick : (()=> void);
array: any[]; 
empty : string;
onDelete: (index: string) => void;
}
export default function LogContainer({ title, buttonText,handleClick,array,empty,onDelete  }:props) {
  const renderRightActions = (progress: any, dragX: any, index: string) => {
    return (
      <Pressable onPress={() => onDelete(index)} style={LogContainerStyle.deleteButton}>
        <Text>Delete</Text>
      </Pressable>
    );
  };
  return (
    <View style={LogContainerStyle.container}>
      <View style={LogContainerStyle.logcontainer}>
          <Text style={LogContainerStyle.logContainerTexts}>{title}</Text>
          {array && array.length > 0 ? ( 
          array.map((foodItem, index) => (
            <Swipeable key={foodItem.id} renderRightActions={(progress, dragX) => renderRightActions(progress, dragX, foodItem.id)}>
            <View style={LogContainerStyle.loggedview}>
              <Text style={LogContainerStyle.logContainerTexts}>{foodItem.name}</Text>
              <Text style={LogContainerStyle.logContainerTexts}>{foodItem.calories}</Text>
            </View>
          </Swipeable>
          ))
        ) : (
          <Text style={LogContainerStyle.logContainerTexts}>{empty}</Text>
        )}
        <Pressable style={LogContainerStyle.button} onPress={handleClick}>
          <Text style={LogContainerStyle.logContainerTexts}>{buttonText}</Text>
        </Pressable>
      </View>
    </View>
  );  
};
