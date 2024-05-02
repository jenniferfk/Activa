import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Post } from "../assets/interfaces";


export type MainNavigatorForBottomTabsList ={
    Exercises:undefined;
    Recipes:undefined;
    Logs:undefined;
    News: undefined
}

export type MainNavigatorForLoginList ={
    Login : undefined;
    Signup: undefined;
}

export type MainNavigatorStackList={
    ExercisesStack:undefined;
    ExercisesDetailsScreen:{id:number};
}
export type MainNavigatorRecipeStackList={
    RecipesStack:undefined;
    RecipeListStack: {type:string};
    RecipeDetailsScreen:{id:number}
}

export type MainNavigatorNewsStackList={
    NewsStack:undefined;
    NewsDetail: { post: Post };
}

export type MainNavigatorLogsStackList ={
    LogsScreen:undefined;
    LogFood: {date:string,email:string};
}

export type MainNavigatorNavigationProp = BottomTabNavigationProp<MainNavigatorForBottomTabsList>;
export type MainStackNavigatorNavigationProp = NativeStackNavigationProp<MainNavigatorForLoginList>;
export type MainNavigatorStackProp = NativeStackNavigationProp<MainNavigatorStackList>;
export type MainNavigatorRecipeStackProp = NativeStackNavigationProp<MainNavigatorRecipeStackList>;
export type MainNavigatorNewsStackProp = NativeStackNavigationProp<MainNavigatorNewsStackList>;
export type MainNavigatorLogsStackProp = NativeStackNavigationProp<MainNavigatorLogsStackList>;
export type MainNavigatorRouteProp= RouteProp<MainNavigatorForBottomTabsList>;