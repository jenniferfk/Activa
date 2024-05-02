import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {  Text,  Alert, KeyboardAvoidingView, Platform,TouchableWithoutFeedback, Keyboard, ScrollView, ActivityIndicator } from 'react-native';
import { MainStackNavigatorNavigationProp } from '../navigation/MainNavigator.type';
import { setAccessToken, setRefreshToken } from '../redux/slices/authSlice';
import { useDispatch as useDispatchFromRedux } from 'react-redux';
import Config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DidYouKnow from '../molecules/DidYouKnow';
import LoginForm from '../molecules/LoginForm';
import { LoginScreenStyle} from '../assets/styles';
const API_LOGIN = Config.API_LOGIN || '';

const LoginScreen = () => {
    const dispatch = useDispatchFromRedux();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signupnavigation = useNavigation<MainStackNavigatorNavigationProp>();
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardOpen(true);
    });

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardOpen(false);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  
  const navigatetoSignup = () => {
    signupnavigation.navigate('Signup');
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_LOGIN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          token_expires_in: '1m', 
        }),
      });
      const data = await response.json();
      if (response.status === 200) {
        const { accessToken, refreshToken } = data; 
      dispatch(setAccessToken(accessToken));
      dispatch(setRefreshToken(refreshToken));
        AsyncStorage.setItem('userEmail', JSON.stringify({ email }));
      } else if (response.status === 400) {
        Alert.alert('Error', 'User not found');
      } else if (response.status === 401) {
        Alert.alert('Error', 'Invalid password');
      } else {
        Alert.alert('Error', 'Internal server error. Please try again later.');
      }
    } catch (error) {
     // console.error('Error:', error);
    }finally {
      setLoading(false); 
    }
  };

  const handleScreenPress = () => {
    Keyboard.dismiss();
};

  return (
    <KeyboardAvoidingView
  style={LoginScreenStyle.container}
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
>
  <TouchableWithoutFeedback onPress={handleScreenPress}>
    <>
      <Text style={LoginScreenStyle.text}>Welcome to <Text style={LoginScreenStyle.italic}>Activa</Text></Text>
      <ScrollView contentContainerStyle={LoginScreenStyle.content} keyboardShouldPersistTaps="handled">
        <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          navigatetoSignup={navigatetoSignup}
        />
        {loading && <ActivityIndicator size="large" color="#ffffff" />}
      </ScrollView>
      {!isKeyboardOpen && <DidYouKnow />}
    </>
  </TouchableWithoutFeedback>
</KeyboardAvoidingView>
      );
    };
export default LoginScreen;
