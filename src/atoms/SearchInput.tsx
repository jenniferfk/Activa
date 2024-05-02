import React from 'react';
import { TextInput } from 'react-native';
import { SearchInputStyle } from '../assets/styles';

interface SearchInputProps {
    value:string;
    onChangeText: (text: string) => void;
    placeholder:string
}

const SearchInput = ({ onChangeText, value,placeholder }:SearchInputProps) => {
  return (
    <TextInput
      style={SearchInputStyle.input}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      placeholderTextColor="rgba(255, 255, 255, 0.5)"
      
    />
  );
};


export default SearchInput;
