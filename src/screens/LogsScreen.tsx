import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useDispatch as useDispatchFromRedux } from 'react-redux';
import { clearAccessToken, clearRefreshToken } from '../redux/slices/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ExitIcon from '../assets/SvgIcons/ExitIcon';
import Config from 'react-native-config';
import DayLogs from '../organisms/DayLogs';
import UserIcon from '../assets/SvgIcons/UserIcon';
import { UserData } from '../assets/interfaces';
import { LogsStyle} from '../assets/styles';
import { useFocusEffect } from '@react-navigation/native';

interface loggedrecipes{
  id:string;
  date:string;
  name: string;
  calories:any;
}

const MOCK_API_URL = Config.API_USERS|| '';
const API_LOGGEDFOOD= Config.API_LOGGEDFOOD||'';
const LogsScreen = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [email,setEmail]= useState('');
  const [userData, setUserData] = useState<UserData>({
   username: '',
   email: '',
   weight: '',
   height: '',
   id: '',
   gender: '',
   image: '',
 });
 const [loggedRecipes, setLoggedRecipes] = useState<loggedrecipes[]>([]);
  const dispatch = useDispatchFromRedux();
  const [totalCalories, setTotalCalories] = useState<number>(0);

  const handleSignOut = () => {
    dispatch(clearAccessToken());
    dispatch(clearRefreshToken());
    AsyncStorage.removeItem('userEmail');
  };
useEffect(()=>{
  const fetchUserData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('userEmail');
      if (jsonValue) {
        const userDataa = JSON.parse(jsonValue);
        setEmail(userDataa.email);
        try {
          const response = await fetch(`${MOCK_API_URL}?email=${userData.email}`);
          const userDataList = await response.json();
          if (userDataList.length > 0) {
            const currentUserData = userDataList.find((user: UserData) => user.email === userData.email);
            if (currentUserData) {
              setUserData(currentUserData);
            }
          }
        } catch (error) {
        }
      }
    } catch (error) {
    }
  };
  fetchUserData()
})
    
  const fetchLoggedRecipes = async () => {
    try {
      if (email) {
      const response = await fetch(`${API_LOGGEDFOOD}?email=${email}`); 
  
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      const data = await response.json();

      setLoggedRecipes(data); }else{setLoggedRecipes([]);}
    } catch (error) {
      setLoggedRecipes([])
    }
  };
  
  useFocusEffect(
  useCallback(() => {
      fetchLoggedRecipes();
    }, [email])
    
  );
  useFocusEffect(
    useCallback(() => {
      let caloriesSum = 0;
        loggedRecipes.forEach((recipe:loggedrecipes) => {
          caloriesSum += recipe.calories;
        });
        setTotalCalories(caloriesSum);
      }, [loggedRecipes]) );
  
      const handleDeleteFoodItem = async (foodItemId: string) => {
        try {
          const response = await fetch(`${API_LOGGEDFOOD}/${foodItemId}`, {
            method: 'DELETE',
          });
          if (!response.ok) {
            throw new Error(`Failed to delete food item: ${response.status}`);
          }

          fetchLoggedRecipes();
        } catch (error) {
          console.error('Error deleting food item:', error);
        }
      };

  return (
    <View style={LogsStyle.container}>
       <View style={LogsStyle.row}>
        <Pressable onPress={handleSignOut}>
          <ExitIcon />
        </Pressable>
        <View style={LogsStyle.center}>
        <View style={LogsStyle.dateContainer}>
        <Text style={LogsStyle.dateText}>{selectedDate.toDateString()}</Text>
      </View>
      </View>
      <UserIcon size={40} focused/>
      </View>
      <View>
        <Text>{userData.height}</Text>
      </View>
      <DayLogs onDelete={handleDeleteFoodItem} selectedDate={selectedDate} email={userData.email} loggedrecipes={loggedRecipes} calories={totalCalories}/>
    </View>
  );
};

export default LogsScreen;
