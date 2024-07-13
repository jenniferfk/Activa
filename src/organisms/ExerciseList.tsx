import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, ListRenderItem, Pressable } from 'react-native';
import { MainNavigatorStackProp } from '../navigation/MainNavigator.type';
import { Exercise } from '../assets/interfaces';
import { ExListStyle } from '../assets/Styles/ExListStyle';

interface ExercisesListProps {
    selectedCategory: string;
    exerciseData: Exercise[];
    searchText: string;
}

const ExercisesList = ({ selectedCategory, exerciseData, searchText }: ExercisesListProps) => {
    const [filteredData, setFilteredData] = useState<Exercise[]>(exerciseData);
    const navigation = useNavigation<MainNavigatorStackProp>();

    const navigatetoprofileinfo = (id:number) => {
        navigation.navigate('ExercisesDetailsScreen', { id });
      };

    useEffect(() => {
        filterData(searchText);
    }, [searchText, selectedCategory]);

    const filterData = (text: string) => {
        const filteredExercises = exerciseData.filter(exercise =>
            exercise.name.toLowerCase().includes(text.toLowerCase()) &&
            (selectedCategory === 'All' || exercise.type === selectedCategory)
        );
        setFilteredData(filteredExercises);
    };

    const renderExerciseItem: ListRenderItem<Exercise> = ({ item }) => (
        <Pressable onPress={() => navigatetoprofileinfo(item.id)}>
        <View style={ExListStyle.container}>
            <View style={ExListStyle.exerciseItemContainer}>
                <Image source={{ uri: item.image }} style={ExListStyle.exerciseImage} />
                <View style={ExListStyle.overlay} />
                <Text style={ExListStyle.exerciseCalories}>{item.calories} calories/rep</Text>
                <View style={ExListStyle.exerciseTextContainer}>
                    <Text style={ExListStyle.exerciseName}>{item.name}</Text>
                </View>
                <View style={ExListStyle.clickIndicator}>
                    <Text style={ExListStyle.clickText}>&gt;</Text>
                </View>
            </View>
        </View>
        </Pressable>
    );
    return (
        <View style={ExListStyle.outerContainer}>
            <FlatList
                data={filteredData.length > 0 ? filteredData : exerciseData}
                renderItem={renderExerciseItem}
                keyExtractor={(item, index) => `${item.id}-${index}`}
                scrollEnabled={false}
            />
        </View>
    );
};
export default ExercisesList;
