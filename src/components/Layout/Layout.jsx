import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../Loader';
import { Header, Nav, List, ListItem, NLink } from './Layout.styled';

export default function Layout() {
  return (
    <>
      <Header>
        <Nav>
          <List>
            <ListItem>
              <NLink to="/">Home</NLink>
            </ListItem>
            <ListItem>
              <NLink to="movies">Movies</NLink>
            </ListItem>
          </List>
        </Nav>
      </Header>
      <div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}
