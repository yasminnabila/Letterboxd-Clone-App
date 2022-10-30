const axios = require("axios");
const { APP_URL, redis } = require("../config/index");

const movieTypeDevs = `#graphql
type Cast {
    name: String
    profilePict: String
}

type Genre {
    name: String
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
}

input MovieContent {
    title: String
    synopsis: String
    trailerUrl: String
    imageUrl: String
    rating: String
    GenreId: Int
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
    readOneMovieById(id : ID!): Movie
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
  },
};

module.exports = {
  movieTypeDevs,
  movieResolvers,
};
