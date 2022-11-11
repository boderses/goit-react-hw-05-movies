import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../../api/movies';
import { Title, Wrapper, LinkItem } from './Home.styled';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);

  return (
    <Wrapper>
      <Title>Trending today</Title>
      <ul>
        {movies.map(movie => {
          return (
            <LinkItem key={movie.id} to={`movies/${movie.id}`}>
              <li>{movie.title}</li>
            </LinkItem>
          );
        })}
      </ul>
    </Wrapper>
  );
}
