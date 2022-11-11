import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../api/movies';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <>
      {cast && (
        <ul>
          {cast.map(actor => {
            return (
              <li key={actor.id}>
                {actor.profile_path && (
                  <img
                    src={`https://www.themoviedb.org/t/p/w500/${actor.profile_path}`}
                    alt={actor.name}
                  />
                )}
                <p>Name: {actor.name}</p>
                <p>Character: {actor.character}</p>
              </li>
            );
          })}
        </ul>
      )}
      {cast.length === 0 && <p>We don't have information about the cast</p>}
    </>
  );
}
