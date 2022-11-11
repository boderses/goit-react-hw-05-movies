import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';

const HomePage = lazy(() => import('../pages/Home'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetails'));
const MoviesPage = lazy(() => import('../pages/Movies'));
const CastPage = lazy(() => import('../pages/Cast'));
const ReviewsPage = lazy(() => import('../pages/Reviews'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
