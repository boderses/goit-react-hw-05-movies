import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../../api/movies';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => {
          return (
            <Link key={movie.id} to={`movies/${movie.id}`}>
              <li>{movie.title}</li>
            </Link>
          );
        })}
      </ul>
    </>
  );
}
