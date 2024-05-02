import axios from 'axios';
import Config from 'react-native-config';

const BASE_URL = Config.API_RECIPES;
const LIMIT = 10; 

export const fetchRecipeData = async (page: number) => {
  const apiUrl = new URL(`${BASE_URL}`);
  const params = new URLSearchParams();
  params.append('page', page.toString());
  params.append('limit', LIMIT.toString());
  apiUrl.search = params.toString();
  
  try {
    const response = await axios.get(apiUrl.toString());
    return response.data; 
  } catch (error) {
    console.error('Error fetching exercise data:', error);
    return []; 
  }
};
