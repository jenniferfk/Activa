import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/Reducers/rootreducer';
import { setAccessToken } from '../redux/slices/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ActivaAppNavigator from './ActivaAppNavigator';
import LoginMainNavigator from './LoginNavigator';
import { AppStyles } from '../assets/styles';

const MainNavigator = () => {
  const dispatch = useDispatch();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const authToken = useSelector((state: RootState) => state.auth.accessToken);

  useEffect(() => {
    const checkAndSetAuthToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('accessToken'); 
        if (storedToken) {
          dispatch(setAccessToken(storedToken));
        }
      } catch (error) {
        console.error('Error fetching authToken from AsyncStorage:', error);
      }
      finally {
        setIsCheckingAuth(false); 
      }
    };
    checkAndSetAuthToken();
  }, []);
  
  if (isCheckingAuth) {
    return (
      <View style={AppStyles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }


  return (
    <>
      {authToken ? <ActivaAppNavigator /> : <LoginMainNavigator />}
    </>
  );
};

export default MainNavigator;
