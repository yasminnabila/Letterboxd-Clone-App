# Letterboxd Clone (Mobile App)

This is a mobile application based on Letterboxd, uses primarly JavaScript both on the frontend and backend. Data about movies and casts are stored on MongoDB Atlas. You can find more about the stack <a href="#stack">here</a>.

## Key Features

Users can see all list of movies and see each movie in detail.

## Demo

https://user-images.githubusercontent.com/108170309/204283821-62f82d0a-8a42-4785-80fa-e0680798c188.mp4

## Stack
<a name="stack"></a>

### Frontend
* [React Native](https://reactnative.dev/) to compose the UI
* [Apollo Client](https://www.apollographql.com/docs/react/) to communicate with the GraphQL server and manage the data fetching declaratively
* [Expo](https://expo.dev/) to host the app on IoS

### Backend
* [NodeJS](https://nodejs.org/en/) to run the server
* [GraphQL](https://graphql.org/) to manage the data communication with the frontend declaratively
* [MongoDB](https://www.mongodb.com/) to store the data in a scalable way using NoSQL

## To-do(s)
Since this is in an early stage of development, the app is still missing the following features:
* Add register & sign in feature so that only logged in user can access the app
* No search features exist
* Feature for users to rate and review movies that they've seen just like original Letterboxd
