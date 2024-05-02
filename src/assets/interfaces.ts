export interface UserData {
    username: string;
    email: string;
    weight: string;
    height: string;
    id: string;
    gender: string;
    image: string;
  }

  export interface Recipe {
    id: number;
    name: string;
    type: string;
    calories: number;
    ingredients: string[];
    steps: string[];
    addedBy: string;
    protein: number;
    carbs: number;
    fat: number;
    image: string;
    time:number;
  }

  export interface Exercise {
    id: number;
    name: string;
    image: string;
    calories: number;
    type: string;
    steps: string[];
    description:string;
}

export interface Post {
    id: string;
    title: string;
    description: string;
    content: string;
    creator: string;
    pubDate: string;
    image_url: string;
  }