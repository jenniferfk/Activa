import React, { PropsWithChildren, useEffect, useState } from 'react';
import { View, Text, Image, Pressable, ScrollView, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { MainNavigatorStackList } from '../navigation/MainNavigator.type';
import { fetchExerciseData } from '../molecules/FetchExercisesData';
import BackButton from '../assets/SvgIcons/BackButton';
import { Exercise } from '../assets/interfaces';
import { ExDetailsStyle, windowWidth } from '../assets/styles';

type ExercisesDetailsScreenRouteProp = RouteProp<MainNavigatorStackList, 'ExercisesDetailsScreen'>;

type Props = {
  route: ExercisesDetailsScreenRouteProp;
};

const ExerciseDetailsScreen = ({ route }: PropsWithChildren<Props>) => {
  const { id } = route.params;

  const [exercise, setExercise] = useState<Exercise | null>(null);
  const [showInstructions, setShowInstructions] = useState<boolean>(true);
  const [showTargeting, setShowTargeting] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const exerciseData = await fetchExerciseData(1);
        const foundExercise = exerciseData.find((item: Exercise) => item.id === id);
        if (foundExercise) {
          setExercise(foundExercise);
        }
      } catch (error) {
        console.error('Error fetching exercise data:', error);
      }finally {
        setLoading(false);
    }
    };

    fetchData();
  }, [id]);

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
    setShowTargeting(false); 
  };

  const toggleTargeting = () => {
    setShowTargeting(!showTargeting);
    setShowInstructions(false); 
  };
  
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={ExDetailsStyle.container} behavior="padding">
      {loading ? (
      <View style={ExDetailsStyle.loadingContainer}>
        <ActivityIndicator size="large" color="white" />
         </View>
     ) : (
    <ScrollView>
    <View style={ExDetailsStyle.container}>
      {exercise &&(
      <View style={ExDetailsStyle.imageContainer}>
      <Image source={{ uri: exercise.image }} style={ExDetailsStyle.image} />
      <Pressable onPress={() => navigation.goBack()} style={ExDetailsStyle.goBackButton}>
        <BackButton size={windowWidth*0.1} />
      </Pressable>
    </View>)}
      
      <View>
        <Text style={ExDetailsStyle.nametext}>{exercise?.name} </Text>
      </View>
      <View style={ExDetailsStyle.buttonContainer}>
      <Pressable
  onPress={toggleInstructions}
  style={[ExDetailsStyle.button, showInstructions && ExDetailsStyle.activeButton]}
>
  <Text style={[ExDetailsStyle.buttonText,showInstructions && ExDetailsStyle.activetext]}>Instructions</Text>
</Pressable>
<Pressable
  onPress={toggleTargeting}
  style={[ExDetailsStyle.button, showTargeting && ExDetailsStyle.activeButton]}
>
  <Text style={[ExDetailsStyle.buttonText,showTargeting && ExDetailsStyle.activetext]}>Targeting</Text>
</Pressable>

      </View>
      {showInstructions && (
        <View style={ExDetailsStyle.contentContainer}>
          {exercise?.steps.map((step, index) => (
            <Text key={index} style={ExDetailsStyle.contentText}>
              {`${index + 1}. ${step}`}
            </Text>
          ))}
        </View>
      )}

      {showTargeting && (
        <View style={ExDetailsStyle.contentContainer}>
          <Text style={ExDetailsStyle.contentText}>{exercise?.description}</Text>
        </View>
      )}
    </View>
    </ScrollView>)}
    </KeyboardAvoidingView>
  );
};

export default ExerciseDetailsScreen;

