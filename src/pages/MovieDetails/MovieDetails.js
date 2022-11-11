import { useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  useParams,
  useLocation,
  Outlet,
} from 'react-router-dom';

import { getMovieDetails } from '../../api/movies';

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const getGenreNames = genres => genres.map(genre => genre.name).join(', ');

  return (
    <>
      <Link to={location?.state?.from ?? '/'}>Go back</Link>
      {movie && (
        <>
          {movie.poster_path && (
            <img
              src={`https://www.themoviedb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
          )}

          {movie.title && movie.release_date && (
            <h1>
              {movie.title} ({movie.release_date.slice(0, 4)})
            </h1>
          )}

          <p>User score: {movie.vote_average * 10}%</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          {movie.genres && <p>{getGenreNames(movie.genres)}</p>}

          <div>
            <p>Additional information</p>
            <NavLink to="cast" state={{ from: location?.state?.from ?? '/' }}>
              <p>Cast</p>
            </NavLink>
            <NavLink
              to="reviews"
              state={{ from: location?.state?.from ?? '/' }}
            >
              <p>Reviews</p>
            </NavLink>
          </div>
        </>
      )}

      <Outlet />
    </>
  );
}
