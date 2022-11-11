import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export const getTrendingMovies = async () => {
  try {
    const response = await client.get(
      '/trending/movie/day?api_key=29ae5d4d8930c615329fddbb049af986'
    );
    return response.data.results;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getMoviesBySearch = async query => {
  try {
    const response = await client.get(
      `/search/movie?query=${query}&api_key=29ae5d4d8930c615329fddbb049af986&language=en-US&page=1&include_adult=false`
    );
    return response.data.results;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getMovieDetails = async movieId => {
  try {
    const response = await client.get(
      `/movie/${movieId}?api_key=29ae5d4d8930c615329fddbb049af986&language=en-US`
    );
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getMovieCast = async movieId => {
  try {
    const response = await client.get(
      `/movie/${movieId}/credits?api_key=29ae5d4d8930c615329fddbb049af986&language=en-US`
    );
    return response.data.cast;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getMovieReviews = async movieId => {
  try {
    const response = await client.get(
      `/movie/${movieId}/reviews?api_key=29ae5d4d8930c615329fddbb049af986&language=en-US&page=1`
    );
    return response.data.results;
  } catch (error) {
    return Promise.reject(error);
  }
};
