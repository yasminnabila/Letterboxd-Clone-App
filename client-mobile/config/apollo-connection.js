import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  // uri: "http://localhost:4000/",

  uri: "https://8f7c-139-228-111-125.ap.ngrok.io",
  cache: new InMemoryCache(),
});

export default client;
