import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../api/movies';
import { Wrapper, Item, Text } from './Cast.styled';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <>
      {cast && (
        <Wrapper>
          {cast.map(actor => {
            return (
              <Item key={actor.id}>
                {actor.profile_path ? (
                  <img
                    src={`https://www.themoviedb.org/t/p/w500/${actor.profile_path}`}
                    alt={actor.name}
                  />
                ) : (
                  <Text>No photo</Text>
                )}
                <Text>Name: {actor.name}</Text>
                <Text>Character: {actor.character}</Text>
              </Item>
            );
          })}
        </Wrapper>
      )}
      {cast.length === 0 && (
        <Text>We don't have information about the cast</Text>
      )}
    </>
  );
}
