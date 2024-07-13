import React from 'react';
import { TextInput, Pressable, Text } from 'react-native';
import { LoginFormStyle } from '../assets/Styles/LoginFormStyle';

interface LoginFormProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  handleLogin: () => void;
  navigatetoSignup: () => void;
}

const LoginForm = ({ email, setEmail, password, setPassword, handleLogin, navigatetoSignup }: LoginFormProps) => {
  return (
    <>
    <Text style={LoginFormStyle.logintext}>Log in</Text>
      <TextInput
        style={[LoginFormStyle.input, LoginFormStyle.textInput]}
        placeholder="Email"
        placeholderTextColor="gray"
        onChangeText={(text) => setEmail(text)}
        value={email.charAt(0).toUpperCase() + email.slice(1).toLowerCase()}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={[LoginFormStyle.input, LoginFormStyle.textInput]}
        placeholder="Password"
        placeholderTextColor="gray"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
        
      />
      <Pressable
        style={({ pressed }) => [
          LoginFormStyle.pressable,
          pressed && { backgroundColor: 'rgba(0, 0, 0, 0.1)' }
        ]}
        onPress={handleLogin}
      >
        <Text style={LoginFormStyle.buttonText}>Log In</Text>
      </Pressable>
      <Pressable onPress={navigatetoSignup}>
        <Text style={LoginFormStyle.promptText}>
          Don't have an account?{' '}
          <Text style={LoginFormStyle.signUpText}>Sign up now!</Text>
        </Text>
      </Pressable>
    </>
  );
};



export default LoginForm;
