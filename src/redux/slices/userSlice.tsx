import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserState {
  email: string | null;
}

const initialState: UserState = {
  email: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<string>) {
      const email = action.payload;
      state.email = email;
      if (email) {
        AsyncStorage.setItem('userData', JSON.stringify({ email }));
      } else {
        console.error('Error: Cannot set userData. Email is null or undefined.');
      }
    },
    clearUserData(state) {
      state.email = null;
      AsyncStorage.removeItem('userData');
    },
  },
});

export const { setUserData, clearUserData } = userSlice.actions;

export default userSlice.reducer;
