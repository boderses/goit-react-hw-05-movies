import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../api/movies';
import { Wrapper, Text, Item, Title } from './Reviews.styled';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      {reviews && (
        <Wrapper>
          {reviews.map(review => {
            return (
              <Item key={review.id}>
                <Title>{review.author}</Title>
                <Text>{review.content}</Text>
              </Item>
            );
          })}
        </Wrapper>
      )}
      {reviews.length === 0 && (
        <Text>We don't have information about the reviews</Text>
      )}
    </>
  );
}
