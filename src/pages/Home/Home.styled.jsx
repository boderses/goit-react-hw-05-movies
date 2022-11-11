import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  padding-left: 20px;
`;

export const Title = styled.h1`
  color: #ff6b08;
  margin-bottom: 10px;
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  &:hover {
    color: #ff6b08;
  }
`;
