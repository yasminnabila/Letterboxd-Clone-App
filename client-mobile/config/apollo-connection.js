import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  // uri: "http://localhost:4000/",

  uri: "https://4e8d-2001-448a-2082-4f0f-5929-ad06-7a8a-92fa.ap.ngrok.io",
  cache: new InMemoryCache(),
});

export default client;
