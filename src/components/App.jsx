import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/Home/Home'));
const MovieSearch = lazy(() => import('../pages/MovieSearch/MovieSearch'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const CastMovie = lazy(() => import('../pages/CastMovies/CastMovies'));
const ReviewsMovie = lazy(() => import('../pages/ReviewsMovie/ReviewMovie'));
const PageNotFoud = lazy(() => import('../pages/PageNotFound/PageNotFound'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />

          <Route path="movies" element={<MovieSearch />} />

          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<CastMovie />} />
            <Route path="reviews" element={<ReviewsMovie />} />
          </Route>

          <Route path="*" element={<PageNotFoud />} />
        </Route>
      </Routes>
    </>
  );
};
