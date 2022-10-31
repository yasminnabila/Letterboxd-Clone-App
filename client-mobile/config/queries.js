import { gql } from "@apollo/client";

export const FETCH_MOVIES = gql`
  query Query {
    readAllMovies {
      id
      title
      synopsis
      trailerUrl
      imageUrl
      rating
      GenreId
      userMongoId
      Genre {
        id
        name
      }
    }
    readAllGenres {
      id
      name
    }
  }
`;

export const FETCH_MOVIE_DETAIL = gql`
  query Query($readOneMovieByIdId: ID!) {
    readOneMovieById(id: $readOneMovieByIdId) {
      id
      title
      synopsis
      trailerUrl
      imageUrl
      rating
      GenreId
      userMongoId
      Genre {
        id
        name
      }
      Casts {
        id
        name
        profilePict
        MovieId
      }
      Author {
        _id
        username
        email
      }
    }
  }
`;
