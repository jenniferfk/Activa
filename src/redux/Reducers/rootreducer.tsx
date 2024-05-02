import { combineReducers } from 'redux';
import authReducer from '../slices/authSlice';
import userReducer from '../slices/userSlice';



const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
