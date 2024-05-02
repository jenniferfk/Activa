import React, { useEffect } from 'react'
import BootSplash from "react-native-bootsplash";
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigator';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { SafeAreaView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const App = () => {
  useEffect(() => {
    setTimeout(()=>{
  BootSplash.hide();
    },1000);
},[]);

  return (
    <Provider store={store}>
    <SafeAreaView style={{ flex: 1 }}>
    <GestureHandlerRootView>
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
    </GestureHandlerRootView>
    </SafeAreaView>
    </Provider>
  )
}

export default App