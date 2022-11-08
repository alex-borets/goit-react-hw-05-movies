import { useState, useEffect, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import * as API from '../../services/getAPI';
import Additional from '../../components/Additional/Additional';
import InfoMovie from '../../components/MovieInfo/MovieInfo';
import GoBackBtn from '../../components/GoBackBtn/GoBackBtn';
import Loading from '../../components/Loading/Loading';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    API.getMovieById(movieId)
      .then(data => {
        setMovie(data);
      })
      .catch(console.log);
  }, [movieId]);

  if (!movie) {
    return;
  }

  return (
    <>
      <GoBackBtn backLinkHref={backLinkHref} />
      <InfoMovie movie={movie} />
      <Additional location={backLinkHref} />

      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
