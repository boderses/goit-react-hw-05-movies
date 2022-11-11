import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px 20px;
  border-radius: 10px;
`;

export const List = styled.ul`
  padding-left: 20px;
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  &:hover {
    color: #ff6b08;
  }
`;
