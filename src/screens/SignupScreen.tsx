import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, ScrollView, Pressable, ActivityIndicator, Platform } from 'react-native';
import Config from 'react-native-config';
import { SignUpStyle,windowWidth } from '../assets/styles';
import BackButton from '../assets/SvgIcons/BackButton';
import { useNavigation } from '@react-navigation/native';

const API_SIGNUP = Config.API_SIGNUP|| '';
const MOCK_API_URL = Config.API_USERS|| '';

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username,setUsername] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_SIGNUP, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          token_expires_in: '30m', 
        }),
      });

      const data = await response.json();

      if (response.status === 201) {
        await saveUserDataToMockAPI();
        Alert.alert('Success', 'User created successfully');
      } else if (response.status === 400) {
        Alert.alert('Error', data.message);
      } else {
        Alert.alert('Error', 'Internal server error. Please try again later.');
      }
    } catch (error) {
     // console.error('Error:', error);
    }finally {
      setLoading(false); 
    }
  };
  const saveUserDataToMockAPI = async () => {
    try {
      const response = await fetch(MOCK_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          username: username,
          height: height,
          weight: weight,
          gender:gender,
        }),
      });

      if (response.status !== 201) {
       // console.error('Failed to save user data to mock API');
      }
    } catch (error) {
     // console.error('Error:', error);
    }
  };

  const validateHeight = (heightValue:string) => {
    const heightNum = parseInt(heightValue);
    return heightNum >= 50 && heightNum <= 230;
  };

  const validateWeight = (weightValue:string) => {
    const weightNum = parseInt(weightValue);
    return weightNum >= 10 && weightNum <= 200;
  };
  const navigation = useNavigation();
  const [isIOS, setIsIOS] = useState(Platform.OS === 'ios');

  return (
    <ScrollView style={SignUpStyle.container}>
      {loading && (
        <View style={SignUpStyle.loadingContainer}>
          <ActivityIndicator color="#fff" size="large" />
        </View>
      )}
      {isIOS && (
        <Pressable style={SignUpStyle.goBackButton} onPress={() => navigation.goBack()}>
          <BackButton size={windowWidth * 0.1} />
        </Pressable>
      )}
      <Text style={SignUpStyle.signuptext}>Sign Up</Text>
      <View style={SignUpStyle.signupform}>
      <Text style={SignUpStyle.inputlegend}>Email:</Text>
      <TextInput
        style={SignUpStyle.input}
        onChangeText={text => setEmail(text)}
        value={email}
      />

      <Text style={SignUpStyle.inputlegend}>Username:</Text>
      <TextInput
        style={SignUpStyle.input}
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <View style={[SignUpStyle.inputWrapper, SignUpStyle.halfWidth]}>
            <Text style={SignUpStyle.inputlegend}>Gender:</Text>
            <View style={SignUpStyle.buttonContainer}>
              <Button
                title="Male"
                onPress={() => setGender('male')}
                color={gender === 'male' ? 'rgb(243,147,32)' : 'gray'}
              />
              <Button
                title="Female"
                onPress={() => setGender('female')}
                color={gender === 'female' ? 'rgb(243,147,32)' : 'gray'}
              />
            </View>
          </View>
      <View style={SignUpStyle.inputContainer}>
        <View style={[SignUpStyle.inputWrapper, SignUpStyle.halfWidth]}>
          <Text style={SignUpStyle.inputlegend}>Height (cm):</Text>
          <TextInput
            style={SignUpStyle.input}
            onChangeText={text => setHeight(text)}
            value={height}
            keyboardType="numeric"
          />
          {!validateHeight(height) && <Text style={SignUpStyle.errorText}>Height must be between 50cm and 230cm</Text>}
        </View>
        <View style={[SignUpStyle.inputWrapper, SignUpStyle.halfWidth]}>
          <Text style={SignUpStyle.inputlegend}>Weight (kg):</Text>
          <TextInput
            style={SignUpStyle.input}
            onChangeText={text => setWeight(text)}
            value={weight}
            keyboardType="numeric"
          />
          {!validateWeight(weight) && <Text style={SignUpStyle.errorText}>Weight must be between 10kg and 200kg</Text>}
        </View>
      </View>


      <Text style={SignUpStyle.inputlegend}>Password:</Text>
      <TextInput
        style={SignUpStyle.input}
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <Pressable style={SignUpStyle.signupbttn} onPress={handleSignup}>
        <Text>Sign Up</Text>
      </Pressable>
      </View>
    </ScrollView>
  );
};

export default SignupScreen;
