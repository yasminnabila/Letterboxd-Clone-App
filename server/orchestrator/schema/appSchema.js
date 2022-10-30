const axios = require("axios");
const { APP_URL, USER_URL, redis } = require("../config/index");

const movieTypeDevs = `#graphql
type Cast {
    id: ID
    MovieId: ID
    name: String
    profilePict: String
    createdAt: String
    updatedAt: String
}

type Genre {
    id: ID
    name: String
    createdAt: String
    updatedAt: String
}

type User {
  _id: String
  username: String
  email: String
  role: String
  phoneNumber: String
  address: String
}

type Movie {
    id: ID
    title: String
    slug: String
    synopsis: String
    trailerUrl: String
    imageUrl: String
    rating: Int
    GenreId: ID
    userMongoId: String
    createdAt: String
    updatedAt: String
    Casts: [Cast]
    Genre: Genre
    Author: User
}

type responseCreate {
    statusCode: Int
    message: String
}

type responseDelete {
    statusCode: Int
    message: String
}

input MovieContent {
    title: String
    synopsis: String
    trailerUrl: String
    imageUrl: String
    rating: Int
    GenreId: ID
    name1: String
    name2: String
    name3: String
    profilePict1: String
    profilePict2: String
    profilePict3: String
    userMongoId: String
}

type Query {
    readAllMovies: [Movie]
    readOneMovieById(id: ID!): Movie
}

type Mutation {
    createNewMovie(content: MovieContent) : responseCreate
    deleteMovieById(id: ID): responseDelete
  }
`;

const movieResolvers = {
  Query: {
    readAllMovies: async () => {
      try {
        const moviesCache = await redis.get("app:movies");
        if (moviesCache) {
          const data = JSON.parse(moviesCache);
          return data;
        } else {
          const { data: movies } = await axios({
            method: "GET",
            url: APP_URL,
          });
          await redis.set("app:movies", JSON.stringify(movies));
          return movies;
        }
      } catch (err) {
        console.log(err);
      }
    },
    readOneMovieById: async (_, args) => {
      try {
        const { id } = args;
        const { data } = await axios({
          method: "GET",
          url: `${APP_URL}/${id}`,
        });
        const { data: User } = await axios({
          method: `GET`,
          url: `${USER_URL}/${data.userMongoId}`,
        });
        data.Author = User;
        await redis.set(`${APP_URL}/${id}`, JSON.stringify(data));
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    createNewMovie: async (_, args) => {
      try {
        const { content } = args;
        const { data } = await axios.post(`${APP_URL}`, content);
        await redis.del("app:movies");
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    deleteMovieById: async (_, args) => {
      try {
        const { id } = args;
        const { data } = await axios.delete(`${APP_URL}/${id}`);
        await redis.del("app:movies");
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};

module.exports = {
  movieTypeDevs,
  movieResolvers,
};
