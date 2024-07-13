# Activa
Please note that this project is given by the bootcamp's academy that i was in. So the API links are in env files that are not posted here. The images I will provide below showcase the design of my application.
## 1- Introduction:
Activa is a sports/health related app. It lets the user explore exercises and food and see their
information (exercise instructions, exercise target, food recipe, calories in each recipe...). The
user also has access to sports and health news to stay updated on every topic related to them. The
news in this app is global news because the API returns so, but the idea out of it would be sports/
health news. Additionally, the user can log the food he consumed during his day and the calories
will be added for the user to see.
## 2- Features:
- In Plan Screen, the user logs the food he consumed. The total of the calories will be added too. The user can swipe right to delete the logged food!
- In Exercise Screen, the user can browse through exercises, either all of them or based on
the category selected. Additionally, the user can search for exercise. Once an exercise is
clicked, its instructions and targeting will show in a stack screen.
- In Recipes Screen, the user selects the category he wants, and the recipes that are related
to this category show, and once one is clicked, the user can see the information about that
recipe: steps, ingredients, nutriments.

- News Screen: the news is fetched from an API given by the company. For better app
performance and for optimization, pagination has been implemented successfully. The
token that fetches this news, is refreshed once expired, to avoid letting the user log in
again to have authorization to see the news.
- Log in and sign up: When signing up, the user’s email and password go to the API
provided by the company, and additional data go to a mock API. When logging in, the
data put in form gets checked by the log in API and once successful, it provides an access
token and refresh token to get the user authenticated. This token is stored in a local
storage to keep the user authenticated.
<img src="https://github.com/user-attachments/assets/ebfbb21d-02f4-4a9f-8ca5-b6e5d2f6a9e6" width="200">

<img src="https://github.com/user-attachments/assets/0f322014-4cf4-44c8-a599-570cb68768e5" width="200">

<img src="https://github.com/user-attachments/assets/b2e8359e-2ee4-4d92-bc0b-670fdc568087" width="200">

<img src="https://github.com/user-attachments/assets/9b4ab7fd-b7ce-4f9d-afc6-824dfffb1b6f" width="200">

<img src="https://github.com/user-attachments/assets/3492d8fc-9367-4ae5-b9f8-fd7fe038b4dc" width="200">

<img src="https://github.com/user-attachments/assets/f5b8ae01-1cd6-48b1-8ff1-59b9d3f4f80d" width="200">

<img src="https://github.com/user-attachments/assets/c0da2da4-bccd-4284-a354-b4db58f66e14" width="200"> 

<img src="https://github.com/user-attachments/assets/a63639e2-9e34-40c0-bf50-d63314d53858" width="200">



