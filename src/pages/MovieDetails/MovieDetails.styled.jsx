import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding-left: 20px;
`;

export const Button = styled(Link)`
  text-decoration: none;
  padding: 5px;
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 10px;
`;

export const Wrapper = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
`;

export const WrapperImg = styled.div`
  margin-left: 15px;
`;

export const Title = styled.h1`
  color: #ffffff;
  margin-bottom: 15px;
`;

export const Title2 = styled.h2`
  color: #ffffff;
  margin-bottom: 15px;
`;

export const Text = styled.p`
  color: #ffffff;
  margin-bottom: 15px;
`;

export const LinkItem = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;
  &:hover,
  &:focus {
    color: #ff6b08;
  }
`;
