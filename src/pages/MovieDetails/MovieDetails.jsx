import { useEffect, useState } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { getMovieDetails } from '../../api/movies';
import {
  Button,
  Wrapper,
  WrapperImg,
  Container,
  Title,
  Title2,
  Text,
  LinkItem,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const getGenreNames = genres => genres.map(genre => genre.name).join(', ');

  return (
    <Container>
      <Button to={location?.state?.from ?? '/'}>Go back</Button>
      {movie && (
        <Wrapper>
          <div>
            {movie.poster_path && (
              <img
                src={`https://www.themoviedb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
            )}
          </div>
          <WrapperImg>
            {movie.title && movie.release_date && (
              <Title>
                {movie.title} ({movie.release_date.slice(0, 4)})
              </Title>
            )}

            <Text>User score: {movie.vote_average * 10}%</Text>
            <Title2>Overview</Title2>
            <Text>{movie.overview}</Text>
            <Title2>Genres</Title2>
            {movie.genres && <Text>{getGenreNames(movie.genres)}</Text>}
          </WrapperImg>
        </Wrapper>
      )}
      <div>
        <Text>Additional information</Text>
        <LinkItem to="cast" state={{ from: location?.state?.from ?? '/' }}>
          <p>Cast</p>
        </LinkItem>
        <LinkItem to="reviews" state={{ from: location?.state?.from ?? '/' }}>
          <p>Reviews</p>
        </LinkItem>
      </div>

      <Outlet />
    </Container>
  );
}
