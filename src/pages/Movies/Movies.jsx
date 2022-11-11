import { useEffect, useState } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { getMoviesBySearch } from '../../api/movies';
import { FcSearch } from 'react-icons/fc';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentQuery = searchParams.get('query');
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (currentQuery) {
      getMoviesBySearch(currentQuery).then(setMovies);
    }
  }, [currentQuery]);

  const handleSubmit = event => {
    event.preventDefault();
    const query = event.currentTarget.elements.inputValue.value;
    if (query.trim() === '') return alert('no search query');
    setSearchParams({ query: query });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">
          <FcSearch size="30" />
        </button>

        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="inputValue"
        />
      </form>
      {movies && (
        <ul>
          {movies.map(movie => {
            return (
              <Link
                key={movie.id}
                to={`${movie.id}`}
                state={{ from: location }}
              >
                <li>{movie.title}</li>
              </Link>
            );
          })}
        </ul>
      )}
      {movies.length === 0 && <p>Enter the movie name</p>}
    </div>
  );
}
