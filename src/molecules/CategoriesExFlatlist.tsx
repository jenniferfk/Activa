import React, { useState } from 'react';
import { View, Pressable, FlatList, Text } from 'react-native';
import { ExCategoriesStyle} from '../assets/styles';

interface CategoriesExFlatlistProps {
    onSelect: (category: string) => void;
}

const categories = ['All', 'Biceps', 'Triceps', 'Back', 'Chest', 'Shoulders','Legs'];

const CategoriesExFlatlist= ({ onSelect }:CategoriesExFlatlistProps) => {
    const [selectedChoice, setSelectedChoice] = useState<string>('All');

    const handleChoiceSelect = (choice: string) => {
        setSelectedChoice(choice);
        onSelect(choice); 
    };

    const renderItem = ({ item }: { item: string }) => (
        <Pressable
            style={({ pressed }) => [
                ExCategoriesStyle.choiceItem,
                { opacity: pressed ? 0.5 : 1 },
                item === selectedChoice && ExCategoriesStyle.selectedChoiceItem,
            ]}
            onPress={() => handleChoiceSelect(item)}
        >
            <Text style={[ExCategoriesStyle.choiceText, item === selectedChoice && ExCategoriesStyle.selectedChoiceText]}>{item}</Text>
        </Pressable>
    );

    return (
        <View style={ExCategoriesStyle.choicesContainer}>
            <FlatList
                horizontal
                data={categories}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={ExCategoriesStyle.flatListContainer}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default CategoriesExFlatlist;
