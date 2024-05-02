export interface FoodType {
    type: string;
    image: any;
  }
 
  const foodTypes: FoodType[] = [
    { type: 'Breakfast', image: require('./images/breakfast.png') },
    { type: 'Main Dish', image: require('./images/lunch.jpg') },
    { type: 'Soup', image: require('./images/soup.jpg') },
    { type: 'Pasta', image: require('./images/pasta.jpg') },
    { type: 'Pizza', image: require('./images/pizza.jpg') },
    { type: 'Salad', image: require('./images/salad.jpg') },
    { type: 'Sandwiches', image: require('./images/sandwiches.jpg') },
    { type: 'Side Dish', image: require('./images/sidedish.jpg') },
  ];
  
  export default foodTypes;
  