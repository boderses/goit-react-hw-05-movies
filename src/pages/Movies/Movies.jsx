import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getMoviesBySearch } from '../../api/movies';
import { FcSearch } from 'react-icons/fc';
import { Input, Form, List, LinkItem } from './Movies.styled';

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
    if (query.trim() === '') return alert('Enter the movie name');
    setSearchParams({ query: query });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          name="inputValue"
        />
        <button type="submit">
          <FcSearch size="20" />
        </button>
      </Form>
      {movies && (
        <List>
          {movies.map(movie => {
            return (
              <LinkItem
                key={movie.id}
                to={`${movie.id}`}
                state={{ from: location }}
              >
                <li>{movie.title}</li>
              </LinkItem>
            );
          })}
        </List>
      )}
    </div>
  );
}
