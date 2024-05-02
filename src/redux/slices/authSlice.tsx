import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';;

interface AuthState {
    accessToken: string | null; 
    isSignedIn: boolean;
    refreshToken: string | null; 
}

const initialState: AuthState = {
    accessToken: null,
    isSignedIn: false,
    refreshToken: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAccessToken(state, action: PayloadAction<string>) {
            state.accessToken = action.payload;
            AsyncStorage.setItem('accessToken', state.accessToken || '');
        },
        clearAccessToken(state) {
            state.accessToken = null;
            AsyncStorage.removeItem('accessToken');
        },
        setRefreshToken(state, action: PayloadAction<string>) {
            state.refreshToken = action.payload;
            AsyncStorage.setItem('refreshToken', state.refreshToken || '');
        },
        clearRefreshToken(state) {
            state.refreshToken = null;
            AsyncStorage.removeItem('refreshToken');
        },
    },
});

export const { setAccessToken, clearAccessToken, setRefreshToken, clearRefreshToken } = authSlice.actions;

export default authSlice.reducer;