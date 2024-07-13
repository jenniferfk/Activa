import React, { useState, useEffect } from 'react';
import { View, Text, Animated } from 'react-native';
import { didykStyle } from '../assets/Styles/DiYouKnowContainerStyle';

const DidYouKnow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [messages] = useState([
    "Regular exercise can improve brain function and protect memory and thinking skills.",
    "Exercise is not only good for your body but also for your mental health, reducing symptoms of depression and anxiety.",
    "Strength training can help increase bone density and reduce the risk of osteoporosis.",
    "Stretching before and after exercise can improve flexibility and reduce the risk of injury",
    "Exercise can boost your energy levels by improving circulation and delivering oxygen and nutrients to your tissues.",
    "High-intensity interval training (HIIT) can be more effective for fat loss and improving cardiovascular health than steady-state cardio."
  ]);
  const opacity = new Animated.Value(1);

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 1000, 
        useNativeDriver: true
      }).start(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
        Animated.timing(opacity, {
          toValue: 1,
          duration: 2000, 
          useNativeDriver: true
        }).start();
      });
    }, 5000); 

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <View style={didykStyle.didYouKnow}>
        <Text style={didykStyle.dyk}>Did You Know?</Text>
      <Animated.Text style={[didykStyle.didYouKnowText, { opacity }]}>
        {messages[currentIndex]}
      </Animated.Text>
    </View>
  );
};


export default DidYouKnow;
