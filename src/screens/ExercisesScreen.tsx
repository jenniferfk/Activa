import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard, ScrollView, Dimensions, ActivityIndicator, KeyboardAvoidingView, RefreshControl } from 'react-native';
import SearchInput from '../atoms/SearchInput';
import CategoriesExFlatlist from '../molecules/CategoriesExFlatlist';
import ExercisesList from '../organisms/ExerciseList';
import { fetchExerciseData } from '../molecules/FetchExercisesData';
import { useFocusEffect } from '@react-navigation/native';
import { Exercise } from '../assets/interfaces';
import { windowHeight } from '../assets/styles';


const ExercisesScreen = () => {
    const [searchText, setSearchText] = useState<string>('');
    const [categorySelected, setCategorySelected] = useState<string>('');
    const [exerciseData, setExerciseData] = useState<Exercise[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const data = await fetchExerciseData(1); 
            const newData = data.map((item: Exercise, index:number) => ({
                id: index + 1,
                name: item.name,
                image: item.image,
                calories: item.calories,
                type: item.type
            }));
            setExerciseData(newData);
            setPage(prevPage => prevPage + 1);
        } catch (error) {
            console.error('Error fetching exercise data:', error);
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    }, []);
    
    const memoizedFetchData = useMemo(() => fetchData, []);

    useFocusEffect(
        useCallback(() => {
            const fetchDataOnFocus = async () => {
                if (!refreshing) {
                    await memoizedFetchData();
                }
            };
            fetchDataOnFocus();
        }, [refreshing, memoizedFetchData])
    );
    
    const handleSearchChange = (text: string) => {
        setSearchText(text);
    };

    const handleCategorySelect = (category: string) => {
        setCategorySelected(category);
    };

    const handleRefresh = useCallback(() => {
        setRefreshing(true);
        setPage(1);
        fetchData();
    }, []);

    const handleScreenPress = () => {
        Keyboard.dismiss();
    };



    return (
        <View style={styles.container}>
        <KeyboardAvoidingView  behavior="padding">
            <TouchableWithoutFeedback onPress={handleScreenPress}>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={handleRefresh}
                            colors={['white']}
                            progressBackgroundColor={'rgb(19,34,51)'}
                        />
                    }
                >
                    <SearchInput onChangeText={handleSearchChange} value={searchText} placeholder="Search for Exercise" />
                    <CategoriesExFlatlist onSelect={handleCategorySelect} />
                    {loading ? (
                        <View style={styles.loadingContainer}>
                            <ActivityIndicator size="large" color="white" />
                        </View>
                    ) : (
                        <ExercisesList selectedCategory={categorySelected} exerciseData={exerciseData.filter((exercise) =>
                            exercise.name.toLowerCase().includes(searchText.toLowerCase())
                          )} 
                          searchText={searchText}/>
                    )}
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(19,34,51)',
        padding: 0.02 * windowHeight,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(19,34,51)',
        height: windowHeight,
    },
});

export default ExercisesScreen;
