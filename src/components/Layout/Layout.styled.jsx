import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  height: 80px;
  margin-bottom: 20px;
  border-bottom: 2px solid #ffffff;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding-left: 20px;
`;

export const List = styled.ul`
  display: flex;
`;

export const ListItem = styled.li`
  margin-right: 10px;
`;

export const NLink = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;
  &.active {
    color: #ff6b08;
  }
`;
